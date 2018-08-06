import React from 'react';
import {connect} from "react-redux";
import {show_notification} from "../../actions/notifyActions";
import {term_edit} from "../../actions/termsAction";
import {getTemsHelper, updateHelper, insertHelper} from "../../helpers";
import autoBind from "react-autobind";
import {EditorState, ContentState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import htmlToDraftjs from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {ColorPic} from '../../components';
import draftToHtml from 'draftjs-to-html';

class Privacy extends React.Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(),
            isChange: false,
        };
        autoBind(this);
    }

    componentWillMount() {
        let {dispatch, terms} = this.props;
        if (!terms) {
            getTemsHelper({title:"terms"}).then(termg => {
                if (termg.response === true) {
                    if (!termg.value){
                        dispatch(term_edit(termg.value));
                    }
                    const blocksFromHtml = htmlToDraftjs(termg.value.content);
                    const {contentBlocks, entityMap} = blocksFromHtml;
                    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                    const editorState = EditorState.createWithContent(contentState);
                    this.setState({editorState});
                } else {
                    dispatch(show_notification({txt: "Không tìm thấy", type: "err"}));
                }
            });
        } else {
            const blocksFromHtml = htmlToDraftjs(terms.content);
            const {contentBlocks, entityMap} = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            this.setState({editorState});
        }
    }


    handleSubmit() {
        const {dispatch, terms} = this.props;
        let {isChange, editorState} = this.state;
        if (isChange) {
            this.setState({isChange: false});
            let obj = {};
            if (terms != null) {
                obj._id = terms._id;
            }
            obj.title = "terms";
            if (editorState != null) {
                obj.content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
                setTimeout(() => {
                    if (obj.content) {
                        if (terms._id){
                            updateHelper(obj).then(terms => {
                                if (terms.response === true) {
                                    dispatch(show_notification({txt: "Upload thành công", type: "suc"}));
                                    dispatch(term_edit(terms.value));
                                } else {
                                    dispatch(show_notification({txt: terms.value, type: "err"}));
                                }
                            });
                        } else {
                            insertHelper(obj).then(terms => {
                                if (terms.response === true) {
                                    dispatch(show_notification({txt: "Upload thành công", type: "suc"}));
                                    dispatch(term_edit(terms.value));
                                } else {
                                    dispatch(show_notification({txt: terms.value, type: "err"}));
                                }
                            });
                        }

                    } else {
                        dispatch(show_notification({txt: "loi content", type: "err"}));
                    }
                }, 2000);


            }


        }
    }

    onEditorStateChange(editorState) {
        this.setState({editorState, isChange: true});
        //$('#contents').html(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }

    render() {
        let {isChange, editorState} = this.state;

        return (
            <div className="content mt-3" style={{width: "100%"}}>
                <div className="animated">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <Editor
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
                                {
                                    isChange && <button type="submit"
                                                        className="btn btn-success btn-flat m-b-30 m-t-30"
                                                        onClick={this.handleSubmit}
                                    >
                                        Cập nhật
                                    </button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        terms: state.termsReducers,
        notification: state.notifyReducers
    };
};
export default connect(mapStateToProps)(Privacy);
