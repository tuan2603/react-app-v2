import React, {Component} from 'react';
import {EditorState, convertToRaw, ContentState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraftjs from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import autoBind from 'react-autobind';
import {ColorPic} from '../components';
import PropTypes from "prop-types";


class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        autoBind(this);
    }

    componentWillMount() {
        if (this.props.value) {
            const blocksFromHtml = htmlToDraftjs(this.props.value);
            const {contentBlocks, entityMap} = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            this.setState({editorState});
        }
    }

    onEditorStateChange(editorState) {
        this.setState({editorState});
        this.props.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }

    render() {
        let {editorState} = this.state;
        let {name, label} = this.props;
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <Editor
                        name={name}
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                        defaultEditorState={editorState}
                        toolbar={{
                            colorPicker: {component: ColorPic},
                        }}
                    />
                </div>
            </div>

        )
    }
}

MyEditor.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    value: PropTypes.string
};

export default MyEditor;
