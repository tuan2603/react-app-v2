import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraftjs from 'html-to-draftjs';
import $ from 'jquery';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import autoBind from 'react-autobind';
import {ColorPic} from '../components';

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        autoBind(this);
    }

    componentWillMount(){
        const blocksFromHtml = htmlToDraftjs('<p>Lorem ipsum ' +
            'dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet ' +
            'maximus nec, tempus auctor diam. Nunc odio elit,  ' +
            'commodo quis dolor in, sagittis scelerisque nibh. ' +
            'Suspendisse consequat, sapien sit amet pulvinar  ' +
            'tristique, augue ante dapibus nulla, eget gravida ' +
            'turpis est sit amet nulla. Vestibulum lacinia mollis  ' +
            'accumsan. Vivamus porta cursus libero vitae mattis. ' +
            'In gravida bibendum orci, id faucibus felis molestie ac.  ' +
            'Etiam vel elit cursus, scelerisque dui quis, auctor risus.</p>');
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);

        this.setState({editorState});
    }

    onEditorStateChange(editorState) {
        this.setState({editorState});

        $('#contents').html(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }

    render() {
        let {editorState} = this.state;
        return (
             <div>
                 <Editor
                     editorState={editorState}
                     toolbarClassName="toolbarClassName"
                     wrapperClassName="wrapperClassName"
                     editorClassName="editorClassName"
                     onEditorStateChange={this.onEditorStateChange}
                     defaultEditorState={editorState}
                     toolbar={{
                         colorPicker: { component: ColorPic },
                     }}
                 />
                <div id="contents"></div>

             </div>

        )
    }
}
export default (MyEditor);
