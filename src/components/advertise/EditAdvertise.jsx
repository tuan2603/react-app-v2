import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adverActions from '../../actions/adverActions';
import autoBind from "react-autobind";
import TextInput from "../TextInput";
import ImageUpload from "./ImageUpload";



class EditAdvertise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advertise: this.props.adver,
            saving: false,
            file: '',
            isRedirect: false
        };
        autoBind(this);
    }

    componentDidMount() {
        document.title = "Chỉnh sửa slider - Quảng cáo"
        if (!this.state.advertise._id === "") {
            this.props.actions.loadAdvertise();
            this.setState({advertise: this.props.adver});

        }
    }

    updateCatState(event) {
        const field = event.target.name;
        const advertise = this.state.advertise;
        advertise[field] = event.target.value;
        return this.setState({advertise});
    }

    updateCatFile(file) {
        console.log("file", file);
        return this.setState({file});
    }

    onSave(event) {
        event.preventDefault();
        let {advertise, file} = this.state;
        if (this.state.file) {
            // update have image
            let data = new FormData();
            data.append('image', file);
            data.append('_id',advertise._id);
            data.append('title',advertise.title);
            data.append('content',advertise.content);
            this.props.actions.updateImageAdvertise(data).then(adver=>{
                if (adver) {
                    this.setState({isEditing: !this.state.isEditing});
                }
            });
        } else {
            // update have not image
            this.props.actions.updateAdvertise(advertise).then(adver=>{
                if (adver) {
                    this.setState({isEditing: !this.state.isEditing});
                }
            });
        }
    }

    render() {
        let {isRedirect, advertise, saving} = this.state;
        console.log("advertise", advertise);
        if (isRedirect) {
            return  <Redirect to={`/quangcao.html`} />;
        }
        if (advertise._id === "") {
            return (<div> </div>)
        }
        return (
            <div className="col-md-12 col-md-offset-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline"> Chỉnh sửa slider </h2>
                    </div>
                    <div className="card-header">
                        <Link  to={`/quangcao.html`}  className="page-title-action">
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
                            name="title"
                            label="title"
                            value={advertise.title}
                            onChange={this.updateCatState}/>

                        <TextInput
                            name="content"
                            label="content"
                            value={advertise.content}
                            onChange={this.updateCatState}/>

                        <ImageUpload
                            name="url_image"
                            label="url_image"
                            value={advertise.url_image}
                            onChange={this.updateCatFile}/>
                    </div>
                </div>
            </div>
        );
    }
}



EditAdvertise.propTypes = {
    actions: PropTypes.object.isRequired,
    adver: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(adverActions, dispatch)
    };
}
let mapStateToProps = (state, ownProps)  => {
    let advers = state.adver;
    let adver = {_id: '', title: '', content: '', url_image: '', create_at: Date.now()};
    let id = ownProps.match.params.id;
    console.log("id",id);
    if (advers && id) {
        adver = Object.assign({}, advers.find(adverf => adverf._id === id));
    }
    return {adver};
}

export default connect(mapStateToProps,mapDispatchToProps)(EditAdvertise);
