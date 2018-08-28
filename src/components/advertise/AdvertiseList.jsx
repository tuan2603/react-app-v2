import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";
import {bindActionCreators} from "redux";
import * as adverActions from "../../actions/adverActions";
import {connect} from "react-redux";
import {apiUrl} from "../../utils";

class AdvertiseList extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        let {advertises} = this.props;
        if (advertises.length > 0) {
            return (
                <div className="content mt-3">
                    <div className="animated fadeIn wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="wp-heading-inline">Trang</h1>
                                        <Link to={'/quangcao.html/new'} className="page-title-action">
                                            <strong className="card-title btn btn-primary">Thêm Quảng cáo</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table className="table table-striped">
                                            <tbody>
                                            {advertises.map((adv, i) => {
                                                let dateview = adv.updated_at !== undefined ? adv.updated_at : (adv.create_at !== undefined ? adv.create_at : Date.now());
                                                return <tr key={adv._id}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td><Link to={'/quangcao.html/' + adv._id}>{
                                                        (adv.title !== undefined) && adv.title
                                                    }</Link></td>
                                                    <td>{
                                                        <img src={apiUrl + "/uploads/advertises/" + adv.url_image}
                                                             height={200} alt={adv.title}/>
                                                    }</td>
                                                    <td>{
                                                        new Intl.DateTimeFormat('en-GB', {
                                                            year: 'numeric',
                                                            month: '2-digit',
                                                            day: '2-digit'
                                                        }).format(dateview)
                                                    }</td>
                                                    <td>
                                                        <button type="button" className="btn btn-primary">Edit</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-danger">Public</button>
                                                    </td>
                                                </tr>
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="content mt-3">
                    <div className="animated fadeIn wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="wp-heading-inline">Trang</h1>
                                        <Link to={'/quangcao.html/new'} className="page-title-action">
                                            <strong className="card-title btn btn-primary">Thêm Quảng cáo</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }

};

AdvertiseList.propTypes = {
    advertises: PropTypes.array.isRequired,
};


function mapStateToProps(state) {
    if (state.adver) {
        return {
            advertises: state.adver
        };
    } else {
        return {
            advertises: [{_id: '', title: '', content: '', url_image: '', create_at: Date.now()}]
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(adverActions, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(AdvertiseList);

