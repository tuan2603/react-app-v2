import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
import {MyEditor} from '../../components';


class PageForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <TextInput
                        name="title"
                        label="Tiêu đề"
                        value={this.props.page.title}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="permalink"
                        label="đường link"
                        value={this.props.page.permalink}
                        onChange={this.props.onChange}/>

                    <MyEditor
                        name="content"
                        label="Nội dung"
                        value={this.props.page.content}
                        onChange={this.props.onChangeContent}
                    />

                    <input
                        type="submit"
                        disabled={this.props.saving}
                        value={this.props.saving ? 'Đang lưu...' : 'Cập nhật'}
                        className="btn btn-primary"
                        onClick={this.props.onSave}/>
                </form>
            </div>
        );
    }
}

PageForm.propTypes = {
    page: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeContent: PropTypes.func.isRequired
};

export default PageForm;
