import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
import ImageUpload from '../../components/ImageUpload';


class CatForm extends Component {

    render() {

        return (
            <div>
                <form>
                    <TextInput
                        name="value"
                        label="value"
                        value={this.props.cat.value}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="label"
                        label="label"
                        value={this.props.cat.label}
                        onChange={this.props.onChange}/>

                    <ImageUpload
                        name="icon"
                        label="icon"
                        value={this.props.cat.icon}
                        onChange={this.props.onFileChange}/>

                    <input
                        type="submit"
                        disabled={this.props.saving}
                        value={this.props.saving ? 'Saving...' : 'Save'}
                        className="btn btn-primary"
                        onClick={this.props.onSave}/>
                </form>
            </div>
        );
    }
}

CatForm.propTypes = {
    cat: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CatForm;
