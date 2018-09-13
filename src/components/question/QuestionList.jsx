import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";
import {bindActionCreators} from "redux";
import * as questionActions from "../../actions/questionActions";
import {connect} from "react-redux";


class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.questions
        }
        autoBind(this);
    }

    componentDidMount() {
        if (this.state.questions.length === 0) {
            this.props.actions.loadQuestion();
            setTimeout(() => {
                this.setState({questions: [...this.props.questions]});
            }, 2000)
        }
    }

    handleDelete(question) {
        this.props.actions.deleteQuestion({_id: question._id}).then(questiond => {
            if (questiond) {
                const newState = Object.assign([], this.state.questions);
                const indexOfCatToDelete = this.state.questions.findIndex(questionf => {
                    return questionf._id === questiond._id
                });
                newState.splice(indexOfCatToDelete, 1);
                this.setState({questions: [...newState]});

            }
        });

    }

    handleStatus(question) {
        if (question.status === 0) {
            question.status = 1;
        } else {
            question.status = 0;
        }

        this.props.actions.updateQuestion(question).then(questionup => {
            if (questionup) {
                let newItems = [...this.state.questions.filter(question => question._id !== questionup._id),
                    Object.assign({}, questionup)
                ];
                this.setState({
                    questions: newItems
                });
            }
        });
    }

    render() {
        let {questions} = this.state;
        if (questions.length > 0) {
            return (
                <div className="content mt-3">
                    <div className="animated fadeIn wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="wp-heading-inline">Trang</h1>
                                        <Link to={'/cauhoi.html/new'} className="page-title-action">
                                            <strong className="card-title btn btn-primary">Thêm Câu hỏi</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">Stt</th>
                                                <th scope="col">Nhóm câu hỏi</th>
                                                <th scope="col">Câu hỏi</th>
                                                <th scope="col">Câu trả lời</th>
                                                <th scope="col">Hành động</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {questions.map((question, i) => {
                                                return <tr key={question._id}>
                                                    <th scope="row" style={{width: "20px"}}>{question.no}</th>
                                                    <td style={{width: "150px"}}>{
                                                        (question.question_group !== undefined) && question.question_group
                                                    }</td>
                                                    <td style={{width: "150px"}}><Link
                                                        to={'/cauhoi.html/' + question._id}>{
                                                        (question.title_question !== undefined) && question.title_question
                                                    }</Link></td>

                                                    <td>{
                                                        question.content_answer.map((answer, i) => {
                                                            return <p className="btn-block" key={answer._id} >- {answer.answer} </p>
                                                        })
                                                    }</td>
                                                    <td style={{width: "100px"}}>
                                                        <div className="card-body">
                                                            <button type="button" className="btn btn-warning btn-block"
                                                                    onClick={(e) => this.handleStatus(question)}>{question.status === 0 ? " not active " : " active "}</button>
                                                            <Link type="button" className="btn btn-primary  btn-block"
                                                                  to={`cauhoi.html/${question._id}`}>Edit</Link>
                                                            <button type="button" className="btn btn-danger  btn-block"
                                                                    onClick={(e) => this.handleDelete(question)}>delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="content mt-3">
                    <div className="animated fadeIn wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="wp-heading-inline">Trang</h1>
                                        <Link to={'/cauhoi.html/new'} className="page-title-action">
                                            <strong className="card-title btn btn-primary">Thêm Câu hỏi</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    if (state.questions) {
        return {
            questions: state.questions
        };
    } else {
        return {
            questions: []
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(questionActions, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);

