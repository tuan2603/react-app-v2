import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as testimonialActions from '../../actions/testimonialActions';
import autoBind from "react-autobind";
import TextInput from "../TextInput";
import ImageUpload from "./ImageUpload";



class TestimonialEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonial: this.props.testimonial,
            saving: false,
            file: '',
            isRedirect: false
        };
        autoBind(this);
    }

    componentDidMount() {
        document.title = "Sửa - Chứng thực"
        if (!this.state.testimonial._id === "") {
            this.props.actions.loadTestimonial();
            this.setState({testimonial: this.props.testimonial});

        }
    }

    updateCatState(event) {
        const field = event.target.name;
        const testimonial = this.state.testimonial;
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
        if (this.state.file) {
            // update have image
            let data = new FormData();
            data.append('file', file);
            data.append('_id',testimonial._id);
            data.append('full_name',testimonial.full_name);
            data.append('content',testimonial.content);
            this.props.actions.updateImageTestimonial(data).then(testimonialu=>{
                if (testimonialu) {
                    this.setState({isEditing: !this.state.isEditing});
                }
            });
        } else {
            // update have not image
            this.props.actions.updateTestimonial(testimonial).then(testimonialu=>{
                if (testimonialu) {
                    this.setState({isEditing: !this.state.isEditing});
                }
            });
        }
    }

    render() {
        let {isRedirect, testimonial, saving} = this.state;

        if (isRedirect) {
            return  <Redirect to={`/testimonial.html`} />;
        }
        if (testimonial._id === "") {
            return (<div> </div>)
        }
        return (
            <div className="col-md-12 col-md-offset-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline"> Chỉnh sửa slider </h2>
                    </div>
                    <div className="card-header">
                        <Link  to={`/testimonial.html`}  className="page-title-action">
                            <strong className=" btn btn-primary">Về trước
                            </strong>
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



TestimonialEdit.propTypes = {
    actions: PropTypes.object.isRequired,
    testimonial: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(testimonialActions, dispatch)
    };
}
let mapStateToProps = (state, ownProps)  => {
    let testimonials = state.testimonials;
    let testimonial = {_id: '', full_name: '', content: '', avatarLink: ''};
    let id = ownProps.match.params.id;
    console.log("id",id);
    if (testimonials && id) {
        testimonial = Object.assign({}, testimonials.find(testimonialf=> testimonialf._id === id));
    }
    return {testimonial};
}

export default connect(mapStateToProps,mapDispatchToProps)(TestimonialEdit);
