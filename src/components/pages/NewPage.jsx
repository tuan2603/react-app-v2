import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../../actions/pageActions';
import PageForm from './PageForm';
import autoBind from "react-autobind";


class NewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page : {
                title: '',
                content: '',
                permalink: '',
                author: this.props.user,
                create_at: Date.now()
            },
            saving: false,
            file: '',
            isRedirect: false
        };
        autoBind(this);
    }

    componentDidMount() {
        document.title = "Tạo gói mới"
    }

    updatePageState(event) {
        const field = event.target.name;
        const page = this.state.page;
        page[field] = event.target.value;
        return this.setState({page});
    }

    onChangeContent(content) {
        let {page} = this.state;
        page.content = content;
        return this.setState({page});
    }

    savePage(event) {
        event.preventDefault();
        this.setState({saving: true});
        let {page} = this.state;
        this.props.actions.createPages(page).then(pageu => {
                if (pageu) {
                    this.setState({page:pageu, isRedirect:true});
                }
            });


    }

    render() {
        let {isRedirect, page} = this.state;
        if (isRedirect && page._id) {
            return  <Redirect to={`/trang.html/${page._id}`} />;
        }
        return (
            <div className="col-md-12 col-md-offset-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline">Thêm trang mới</h2>
                        <Link  to={`/trang.html`}  className="page-title-action">
                            <strong className=" btn btn-primary">Về trước
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
        );
    }
}



NewPage.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pageActions, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        user: state.userReducers,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
