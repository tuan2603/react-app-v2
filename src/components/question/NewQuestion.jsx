import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/questionActions';
import autoBind from "react-autobind";
import TextInput from "../TextInput";


class NewQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: { question_group: '', title_question: '', no: 0, create_at: Date.now()},
            saving: false,
            isRedirect: false
        };
        autoBind(this);
    }

    componentDidMount() {
        document.title = "Tạo mới câu hỏi"
    }

    updateCatState(event) {
        const field = event.target.name;
        let question = this.state.question;
        question[field] = event.target.value;
        return this.setState({question: question});
    }


    onSave(event) {
        event.preventDefault();
        let {question} = this.state;
        this.props.actions.createQuestion(question)
            .then(question => {
                if (question) {
                    this.setState({question, isRedirect: true});
                }
            });

    }

    render() {
        let {isRedirect, question, saving} = this.state;
        if (isRedirect && question._id) {
            return <Redirect to={`/cauhoi.html/${question._id}`}/>;
        }
        return (
            <div className="col-md-12 col-md-offset-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline"> Thêm mới Câu hỏi </h2>
                    </div>
                    <div className="card-header">
                        <Link to={`/cauhoi.html`} className="page-title-action">
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
                            name="no"
                            label="Số thứ tự"
                            value={`${question.no}`}
                            onChange={this.updateCatState}/>

                        <TextInput
                            name="question_group"
                            label="nhóm câu hỏi"
                            value={question.question_group}
                            onChange={this.updateCatState}/>

                        <TextInput
                            name="title_question"
                            label="Tiêu đề câu hỏi"
                            value={question.title_question}
                            onChange={this.updateCatState}/>
                    </div>
                </div>
            </div>
        );
    }
}


NewQuestion.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(questionActions, dispatch)
    };
}

function mapStateToProps(state) {
    return {questions: state.questions};
}


export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
