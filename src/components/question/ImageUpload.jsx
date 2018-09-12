import React from 'react';
import PropTypes from 'prop-types';
import {apiUrl} from "../../utils";
import autoBind from "react-autobind";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '', imagePreviewUrl: ''};
        autoBind(this);
    }


    handleImageChange(ev) {
        ev.preventDefault();
        let reader = new FileReader();
        let file = this.uploadInput.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
        this.props.onChange(file);
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let {value, name, label} = this.props;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt={'icon'}/>);
        } else if (value) {
            $imagePreview = (<img src={apiUrl + "/uploads/advertises/" + value} alt={'icon'}/>);
        } else  {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <div className="field">
                <input  className="form-control"
                       name={name}
                       type="file"
                       ref={(ref) => {
                           this.uploadInput = ref;
                       }}
                       onChange={this.handleImageChange}/>
                </div>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

ImageUpload.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
};

export default ImageUpload;
