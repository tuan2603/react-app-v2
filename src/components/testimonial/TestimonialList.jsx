import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";
import {bindActionCreators} from "redux";
import * as testimonialActions from "../../actions/testimonialActions";
import {connect} from "react-redux";
import {apiUrl} from "../../utils";


class TestimonialList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: this.props.testimonials
        }
        autoBind(this);
    }

    componentDidMount() {
        if (this.state.testimonials.length === 0) {
            this.props.actions.loadTestimonial();
            setTimeout(() => {
                this.setState({testimonials: [...this.props.testimonials]});
            }, 2000)
        }
    }

    handleDelete(testimonial) {
        this.props.actions.deleteTestimonial({_id: testimonial._id}).then(testimoniald => {
            if (testimoniald) {
                this.setState({
                    testimonials: [...this.props.testimonials]
                });
            }
        });

    }

    handleStatus(testimonial) {
        let status = 0;
        let {_id} = testimonial;
        if (testimonial.status === 0) {
            status = 1;
        }

        this.props.actions.updateTestimonial({_id, status}).then(testimonialu => {
            if (testimonialu) {
                this.setState({
                    testimonials: [...this.props.testimonials]
                });
            }
        });
    }

    render() {
        let {testimonials} = this.state;
        let no = 1;
        if (testimonials.length > 0) {

            return (
                <div className="content mt-3">
                    <div className="animated fadeIn wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="wp-heading-inline">Lời chứng thực</h1>
                                        <Link to={'/testimonial.html/new'} className="page-title-action">
                                            <strong className="card-title btn btn-primary">Thêm</strong>
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
                                            <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col"> Full Name</th>
                                                <th scope="col"> Avatar</th>
                                                <th scope="col"> Content</th>
                                                <th scope="col">Hành động</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {testimonials.map((testimonial, i) => {
                                                return <tr key={testimonial._id}>
                                                    <th scope="row" style={{width: "20px"}}>{no++}</th>
                                                    <td style={{width: "150px"}}>{
                                                        (testimonial.full_name !== undefined) && testimonial.full_name
                                                    }</td>
                                                    <td style={{width: '150px'}}>
                                                        <img style={{width: '120px', height: 'auto'}}
                                                             src={apiUrl + "/uploads/testimonials/" + testimonial.avatarLink}
                                                             height={200} alt={testimonial.full_name}/>
                                                    </td>

                                                    <td>{
                                                        testimonial.content !== undefined && testimonial.content
                                                    }
                                                    </td>
                                                    <td style={{width: "100px"}}>
                                                        <div className="card-body">
                                                            <button type="button"
                                                                    className="btn btn-warning btn-block"
                                                                    onClick={(e) => this.handleStatus(testimonial)}>{testimonial.status === 0 ? " not active " : " active "}</button>
                                                            <Link type="button"
                                                                  className="btn btn-primary  btn-block"
                                                                  to={`testimonial.html/${testimonial._id}`}>Edit</Link>
                                                            <button type="button"
                                                                    className="btn btn-danger  btn-block"
                                                                    onClick={(e) => this.handleDelete(testimonial)}>delete
                                                            </button>
                                                        </div>
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
            return (<div className="content mt-3">
                <div className="animated fadeIn wrap">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="wp-heading-inline">Lời chứng thực</h1>
                                    <Link to={'/testimonial.html/new'} className="page-title-action">
                                        <strong className="card-title btn btn-primary">Thêm</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }

    }
};

TestimonialList.propTypes = {
    testimonials: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    if (state.testimonials) {
        return {
            testimonials: state.testimonials
        };
    } else {
        return {
            testimonials: []
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(testimonialActions, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(TestimonialList);

