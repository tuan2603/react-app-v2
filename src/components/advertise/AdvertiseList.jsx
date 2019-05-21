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
        this.state = {
            advertises: this.props.advertises
        }
        autoBind(this);
    }

    componentDidMount() {
        if (this.state.advertises.length === 0) {
            this.props.actions.loadAdvertise();
            setTimeout(()=>{
                this.setState({advertises: [...this.props.advertises]});
            },2000)
        }
    }

    handleDelete( adv ){
        if( adv._id != undefined) {
            this.props.actions.deleteAdvertise({_id:adv._id}).then(adver=>{
                if (adver) {
                    const newItems = this.state.advertises.filter(adverItem=>{
                        return adverItem !== adv;
                    });
                    this.setState({
                        advertises: [...newItems]
                    });
                }
            });
        }
        

    }

    handleStatus(adv){
        console.log("alo",adv);
        if (adv.status === 0) {
            adv.status = 1;
        } else {adv.status = 0;}

        this.props.actions.updateAdvertise(adv).then(adverup=>{
            if (adverup) {
               let newItems =  [...this.state.advertises.filter(adver => adver._id !== adverup._id),
                    Object.assign({}, adverup)
                ];
                this.setState({
                    advertises: newItems
                });
            }
        });
    }

    render() {
        let {advertises} = this.state;
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
                                                        <Link type="button" className="btn btn-primary" to={`quangcao.html/${adv._id}`} >Edit</Link>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-warning" onClick={(e)=>this.handleStatus(adv)}>{adv.status === 0 ? " not active "  : " active "}</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-danger" onClick={(e)=>this.handleDelete(adv)}>delete</button>
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
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    if (state.adver) {
        return {
            advertises: state.adver
        };
    } else {
        return {
            advertises: []
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(adverActions, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(AdvertiseList);

