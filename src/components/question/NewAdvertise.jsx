import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adverActions from '../../actions/adverActions';
import autoBind from "react-autobind";
import TextInput from "../TextInput";
import ImageUpload from "./ImageUpload";



class NewAdvertise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adver: {
                _id: '',
                title: '',
                content: '',
                url_image: '',
            },
            saving: false,
            file: '',
            isRedirect: false
        };
        autoBind(this);
    }

    componentDidMount() {
        document.title = "Tạo mới slider - Quảng cáo"
    }

    updateCatState(event) {
        const field = event.target.name;
        const adver = this.state.adver;
        adver[field] = event.target.value;
        return this.setState({adver: adver});
    }

    updateCatFile(file) {
        console.log("file", file);
        return this.setState({file});
    }

    onSave(event) {
        event.preventDefault();
        let {adver, file} = this.state;
        let data = new FormData();
        data.append('image', file);
        data.append('title',adver.title);
        data.append('content',adver.content);
        this.props.actions.createAdver(data)
            .then(adver=>{
                if (adver) {
                    this.setState({adver, isRedirect:true});
                }
            });

    }

    render() {
        let {isRedirect, adver, saving} = this.state;
        if (isRedirect && adver._id) {
            return  <Redirect to={`/quangcao.html/${adver._id}`} />;
        }
        return (
            <div className="col-md-12 col-md-offset-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline"> Thêm mới slider </h2>
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
                            value={adver.title}
                            onChange={this.updateCatState}/>

                        <TextInput
                            name="content"
                            label="content"
                            value={adver.content}
                            onChange={this.updateCatState}/>

                        <ImageUpload
                            name="url_image"
                            label="url_image"
                            value={adver.url_image}
                            onChange={this.updateCatFile}/>
                    </div>
                </div>
            </div>
        );
    }
}



NewAdvertise.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(adverActions, dispatch)
    };
}
function mapStateToProps(state) {
    return { adver: state.adver};
}


export default connect(mapStateToProps,mapDispatchToProps)(NewAdvertise);
