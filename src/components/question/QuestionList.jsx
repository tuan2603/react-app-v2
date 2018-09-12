import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";
import {bindActionCreators} from "redux";
import * as questionActions from "../../actions/questionActions";
import {connect} from "react-redux";
import {apiUrl} from "../../utils";

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
            this.props.actions.loadAdvertise();
            setTimeout(()=>{
                this.setState({questions: [...this.props.questions]});
            },2000)
        }
    }

    handleDelete( question ){
        this.props.actions.deleteQuestion({_id:question._id}).then(question=>{
            if (question) {
                const newItems = this.state.question.filter(questionItem=>{
                    return questionItem !== question;
                });
                this.setState({
                    questions: [...newItems]
                });
            }
        });

    }

    handleStatus(question){
        console.log("question",question);
        if (question.status === 0) {
            question.status = 1;
        } else {question.status = 0;}

        this.props.actions.updateQuestion(question).then(questionup=>{
            if (questionup) {
               let newItems =  [...this.state.questions.filter(question => question._id !== questionup._id),
                    Object.assign({}, questionup)
                ];
                this.setState({
                    questions: newItems
                });
            }
        });
    }

    render() {
        let {advertises} = this.state;
        if (advertises.length > 0) {
            return (
                <div className="content mt-3">
                    <div className="animated fadeIn wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h1 className="wp-heading-inline">Trang</h1>
                                        <Link to={'/quangcao.html/new'} className="page-title-action">
                                            <strong className="card-title btn btn-primary">Thêm Quảng cáo</strong>
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
                                            <tbody>
                                            {advertises.map((adv, i) => {
                                                let dateview = adv.updated_at !== undefined ? adv.updated_at : (adv.create_at !== undefined ? adv.create_at : Date.now());
                                                return <tr key={adv._id}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td><Link to={'/quangcao.html/' + adv._id}>{
                                                        (adv.title !== undefined) && adv.title
                                                    }</Link></td>
                                                    <td>{
                                                        <img src={apiUrl + "/uploads/advertises/" + adv.url_image}
                                                             height={200} alt={adv.title}/>
                                                    }</td>
                                                    <td>{
                                                        new Intl.DateTimeFormat('en-GB', {
                                                            year: 'numeric',
                                                            month: '2-digit',
                                                            day: '2-digit'
                                                        }).format(dateview)
                                                    }</td>
                                                    <td>
                                                        <Link type="button" className="btn btn-primary" to={`quangcao.html/${adv._id}`} >Edit</Link>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-warning" onClick={(e)=>this.handleStatus(adv)}>{adv.status === 0 ? " not active "  : " active "}</button>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-danger" onClick={(e)=>this.handleDelete(adv)}>delete</button>
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
                                        <Link to={'/quangcao.html/new'} className="page-title-action">
                                            <strong className="card-title btn btn-primary">Thêm Quảng cáo</strong>
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

