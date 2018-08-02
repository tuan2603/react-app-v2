import React from 'react';
import {apiUrl} from '../../utils';
import tinymce from 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/table';
import 'tinymce/plugins/image';
import 'tinymce/plugins/code';

class Privacy extends React.Component {
    constructor() {
        super();
        this.state = {editor: null};
    }

    componentDidMount() {
        tinymce.init({
            selector: '#content',
            skin_url: `/assets/skins/lightgray`,
            plugins: 'wordcount table image code',
            setup: editor => {
                this.setState({ editor });
                editor.on('keyup change', () => {
                    const content = editor.getContent();
                    //this.props.onEditorChange(content);
                });
            }
        })
    }

    componentWillUnmount() {
        tinymce.remove(this.state.editor);
    }

    render() {
        return (
            <div className="content mt-3">
                <div className="animated fadeIn">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Data Table</strong>
                                </div>
                                <div className="card-body">
                                    <textarea
                                        id='content'
                                        defaultValue={'aaaaaaaaaaaaaaaaaaaa'}
                                        onChange={e => console.log(e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Privacy;

