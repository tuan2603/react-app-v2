import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import "./Pages.css";
import autoBind from "react-autobind";
import PageList from "./PageList";
import * as actions from '../../actions/pageActions';

class Pages extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentWillMount() {
        if (this.props.pages[0]._id === '') {
            this.props.actions.loadPages();
        }
    }

    render() {
        let {pages} = this.props;

        return (
            <div className="content mt-3">
                <div className="animated fadeIn wrap">
                    <h1 className="wp-heading-inline">Trang</h1>
                    <hr className="wp-header-end"/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <Link to={'/trang.html/new'} className="page-title-action">
                                        <strong className="card-title">Thêm trang mới</strong>
                                    </Link>
                                </div>
                                <PageList pages={pages}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Pages.propTypes = {
    pages: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    if (state.cats) {
        return {
            pages: state.pages
        };
    } else {
        return {
            pages: [{_id: '', title: '', content: '', accountID: ''}]
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);

