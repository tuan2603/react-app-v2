import React from 'react';
import tinymce from 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/table';
import 'tinymce/plugins/image';
import 'tinymce/plugins/code';
import {connect} from "react-redux";
import {show_notification} from "../../actions/notifyActions";
import {term_edit} from "../../actions/termsAction";
import {getTemsHelper, TemsHelper} from "../../helpers";
import autoBind from "react-autobind";
import TinyMCE from 'react-tinymce';

class Privacy extends React.Component {
    constructor() {
        super();
        this.state = {
            editor: null,
            isChange: false,
        };
        autoBind(this);
    }

    componentWillMount() {
        let {dispatch, terms} = this.props;
        if (!terms) {
            getTemsHelper().then(termg => {
                console.log(termg);
                if (termg.response === true) {
                    dispatch(term_edit(termg.value));
                    this.setState({editor: termg.value.content});
                } else {
                    dispatch(show_notification({txt: "Không tìm thấy", type: "err"}));
                }
            });
        }

    }



    handleSubmit() {
        const {dispatch, terms} = this.props;
        let {isChange, editor} = this.state;
        if (isChange) {

            let obj = {};
            if (terms != null) {
                obj._id = terms._id;
            }
            if (editor != null) {
                obj.content = editor;
            }

            console.log(obj);
            setTimeout(() => {
                TemsHelper(obj).then(terms => {
                    console.log(terms);
                    if (terms.response === true) {
                        dispatch(show_notification({txt: "Upload thành công", type: "suc"}));
                        dispatch(term_edit(terms.value));
                        this.setState({isChange: false});
                    } else {
                        dispatch(show_notification({txt: terms.value, type: "err"}));
                    }
                });
            }, 2000);
        }
    }

    handleEditorChange(e) {
        console.log(e.target.getContent());
    }

    render() {
        let {terms} = this.props;
        let {isChange} = this.state;
        let content = "", title = "Điều kiện và điều khoản sử dụng";
        if (terms) {
            content=terms.content;
            console.log(content);
        }

        return (
            <div className="content mt-3" style={{width: "100%"}}>
                <div className="animated">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">{title}</strong>
                                </div>
                                <div className="card-body">
                                    <TinyMCE
                                        style={{width: "100%"}}
                                        content={content}
                                        config={{
                                            skin_url: `../../assets/skins/lightgray`,
                                            plugins: 'autolink link lists print preview wordcount table image code',
                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                                        }}
                                        onChange={this.handleEditorChange}
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
