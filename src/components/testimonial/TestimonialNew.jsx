import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testimonialActions from '../../actions/testimonialActions';
import autoBind from "react-autobind";
import TextInput from "../TextInput";
import ImageUpload from "./ImageUpload";



class TestimonialNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testimonial: {
                _id: '',
                full_name: '',
                content: '',
                avatarLink: '',
            },
            saving: false,
            file: '',
            isRedirect: false
        };
        autoBind(this);
    }

    componentDidMount() {
        document.title = "Tạo mới chứng thực - testtimonial"
    }

    updateCatState(event) {
        const field = event.target.name;
        let testimonial = this.state.testimonial;
        testimonial[field] = event.target.value;
        return this.setState({testimonial});
    }

    updateCatFile(file) {
        console.log("file", file);
        return this.setState({file});
    }

    onSave(event) {
        event.preventDefault();
        let {testimonial, file} = this.state;
        let data = new FormData();
        data.append('file', file);
        data.append('full_name',testimonial.full_name);
        data.append('content',testimonial.content);
        this.props.actions.createTestimonial(data)
            .then(testimonial=>{
                if (testimonial) {
                    this.setState({testimonial, isRedirect:true});
                }
            });

    }

    render() {
        let {isRedirect, testimonial, saving} = this.state;
        if (isRedirect && testimonial._id) {
            return  <Redirect to={`/testimonial.html/${testimonial._id}`} />;
        }
        return (
            <div className="col-md-12 col-md-offset-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline"> Thêm mới </h2>
                    </div>
                    <div className="card-header">
                        <Link  to={`/testimonial.html`}  className="page-title-action">
                            <strong className=" btn btn-primary">Về trước</strong>
                        </Link>
                        <button
                            type="submit"
                            disabled={saving}
                            className="btn btn-primary"
                            onClick={this.onSave}> {saving ? 'Đang lưu...' : 'Lưu '}</button>
                    </div>
                    <div className="form-group">
                        <TextInput
                            name="full_name"
                            label="full_name"
                            value={testimonial.full_name}
                            onChange={this.updateCatState}/>

                        <TextInput
                            name="content"
                            label="content"
                            value={testimonial.content}
                            onChange={this.updateCatState}/>

                        <ImageUpload
                            name="avatarLink"
                            label="avatarLink"
                            value={testimonial.avatarLink}
                            onChange={this.updateCatFile}/>
                    </div>
                </div>
            </div>
        );
    }
}



TestimonialNew.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(testimonialActions, dispatch)
    };
}
function mapStateToProps(state) {
    return { testimonials: state.testimonials};
}


export default connect(mapStateToProps,mapDispatchToProps)(TestimonialNew);
