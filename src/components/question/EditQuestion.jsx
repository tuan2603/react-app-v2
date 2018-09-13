import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionActions from '../../actions/questionActions';
import autoBind from "react-autobind";
import TextInput from "../TextInput";


class EditQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question,
            saving: false,
            isRedirect: false,
            answer: '',
        };
        autoBind(this);
    }

    componentDidMount() {
        document.title = "Chỉnh sửa Câu hỏi"
        if (!this.state.question._id === "") {
            this.props.actions.loadQuestion();
            this.setState({question: this.props.question});

        }
    }

    updateCatState(event) {
        const field = event.target.name;
        const question = this.state.question;
        question[field] = event.target.value;
        return this.setState({question});
    }

    handleAnswer(event) {
        return this.setState({answer: event.target.value});
    }

    handleNew() {
       let {question, answer} = this.state;
       question.content_answer.push({answer});
       this.setState({question});
    }

    handleDelete(answer) {
       let {question} = this.state;
        const newState = Object.assign([], question.content_answer);
        const indexOfCatToDelete = question.content_answer.findIndex(answerf => {
            return answerf === answer
        });
        newState.splice(indexOfCatToDelete, 1);
        question.content_answer = newState;
        this.setState({question});
    }


    onSave(event) {
        event.preventDefault();
        let {question} = this.state;

        // update have not image
        this.props.actions.updateQuestion(question).then(questionu => {
            if (questionu) {
                this.setState({isEditing: !this.state.isEditing});
            }
        });

    }

    render() {
        let {isRedirect, question, saving} = this.state;
        console.log("question", question);
        if (isRedirect) {
            return <Redirect to={`/cauhoi.html`}/>;
        }
        if (question._id === "") {
            return (<div></div>)
        }
        return (
            <div className="col-md-12 col-md-offset-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline"> Chỉnh sửa Câu hỏi </h2>
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
                            label="Nhóm câu hỏi"
                            value={question.question_group}
                            onChange={this.updateCatState}/>

                        <TextInput
                            name="title_question"
                            label="Tiêu đề câu hỏi"
                            value={question.title_question}
                            onChange={this.updateCatState}/>

                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2 className="wp-heading-inline  btn-block"> Câu trả lời </h2>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <tbody>
                            {question.content_answer.map((answer, i) => {
                                return <tr key={answer.answer}>
                                    <th scope="row" style={{width: "20px"}}>{i+1}</th>
                                    <td>{
                                        answer.answer
                                    }</td>
                                    <td style={{width: "100px"}}>
                                        <div className="card-body">
                                            <button type="button" className="btn btn-danger  btn-block"
                                                    onClick={(e) => this.handleDelete(answer)}> delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-body">
                        <TextInput
                            name="answer"
                            label="nội dung trả lời"
                            value={""}
                            onChange={this.handleAnswer}/>
                        <button type="button" className="btn btn-primary  btn-block"  onClick={this.handleNew}>Create</button>
                    </div>
                </div>
            </div>
        );
    }
}


EditQuestion.propTypes = {
    actions: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(questionActions, dispatch)
    };
}

let mapStateToProps = (state, ownProps) => {
    let questions = state.questions;
    let question = {_id: '', question_group: '', title_question: '', no: 0, create_at: Date.now()};
    let id = ownProps.match.params.id;
    console.log("id", id);
    if (questions && id) {
        question = Object.assign({}, questions.find(questionf => questionf._id === id));
    }
    return {question};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestion);
