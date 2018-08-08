import React, {Component} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/pageActions';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";
import PageForm from "./PageForm";
import "./Pages.css";

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            page: this.props.page,
            isRedirect: false,
            saving: false,
        };
        autoBind(this);
    }


    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing})
    }

    updatePageState(event) {
        const field = event.target.name;
        const page = this.state.page;
        page[field] = event.target.value;
        return this.setState({page: page});
    }

    onChangeContent(content) {
        let {page} = this.state;
        page.content = content;
        return this.setState({page: page});
    }

    savePage(event) {
        event.preventDefault();
        this.setState({saving: true});
        let {page} = this.state;
        page.author = this.props.user;
        this.props.actions.updatePages(page).then(pageu => {
            if (pageu) {
                this.setState({isEditing: !this.state.isEditing});
            }
        });

    }

    deletePage(event) {
        event.preventDefault();
        this.props.actions.deletePages({_id: this.state.page._id}).then(page => {
            if (page) {
                this.setState({isRedirect: true});
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.page._id !== nextProps.page._id) {
            this.setState({page: nextProps.page});
        }
        this.setState({saving: false});
    }

    render() {
        let {isRedirect} = this.state;
        if (isRedirect) {
            return <Redirect to="/trang.html"/>;
        }
        let {page} = this.props;
        if (this.state.isEditing) {
            return (
                <div className="col-md-12 col-md-offset-2">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="wp-heading-inline">Sửa trang</h2>
                            <Link  to={`/trang.html`}  className="page-title-action">
                                <strong className="btn btn-primary">Về trước
                                </strong>
                            </Link>
                        </div>
                        <div className="form-group">
                            <PageForm
                                page={page}
                                onSave={this.savePage}
                                onChange={this.updatePageState}
                                onChangeContent={this.onChangeContent}
                                saving={this.state.saving}
                            />
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="col-md-12 col-md-offset-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline">{page.title}</h2>
                        <button type="button" onClick={this.toggleEdit} className="btn btn-primary">Sửa Trang
                        </button>
                        <button type="button" onClick={this.deletePage} className="btn btn-danger">Xóa</button>
                    </div>
                    <div className="form-group">
                        <div dangerouslySetInnerHTML={{__html: page.content}}/>
                    </div>
                </div>
            </div>
        )
    }
}

EditPage.propTypes = {
    page: PropTypes.object,
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let pages = state.pages;
    let page = {_id: '', title: '', content: '', permalink: '', author: {fullName: ''}, create_at: Date.now()};
    let id = ownProps.match.params.id;
    if (pages && id) {
        page = Object.assign({}, pages.find(page => page._id === id));
    }
    return {
        page,
        user: state.userReducers,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);

