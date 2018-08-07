import React, {Component} from 'react';
import  {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as catActions from '../../actions/catsActions';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";
import {apiUrl} from "../../utils";
import CatForm from "./CatForm";

class CatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            cat: this.props.cat,
            file: '',
            isRedirect: false,
            saving: false,
        };
        autoBind(this);
    }

    updateCatFile(file) {
        return this.setState({file});
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing})
    }

    updateCatState(event) {
        const field = event.target.name;
        const cat = this.state.cat;
        cat[field] = event.target.value;
        return this.setState({cat: cat});
    }

    saveCat(event) {
        event.preventDefault();
        this.setState({saving: true});
        if (this.state.file) {
            // update have image
            const data = new FormData();
            data.append('icon', this.state.file);
            data.append('_id', this.state.cat._id);
            data.append('value', this.state.cat.value);
            data.append('label', this.state.cat.label);
            this.props.actions.updateCatsImage(data).then(cat=>{
                if (cat) {
                    this.setState({isEditing: !this.state.isEditing});
                }
            });
        } else {
            // update have not image
            this.props.actions.updateCats(this.state.cat).then(cat=>{
                if (cat) {
                    this.setState({isEditing: !this.state.isEditing});
                }
            });
        }
    }

    deleteCat(event) {
        event.preventDefault();
       this.props.actions.deleteCats({_id:this.state.cat._id}).then(cat=>{
           if (cat) {
               this.setState({isRedirect:true});
           }
       });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.cat._id !== nextProps.cat._id) {
            this.setState({cat: nextProps.cat});
        }
        this.setState({saving: false, isEditing: false});
    }

    render() {
        let {isRedirect} = this.state;
        if (isRedirect){
          return  <Redirect to="/page-categories.html" />;
        }
        let {cat} = this.props;
        if (this.state.isEditing) {
            return (
                <div className="col-md-8 col-md-offset-2">
                    <div className="card">
                        <div className="form-group">
                            <h1> Chỉnh sửa </h1>
                            <CatForm
                                cat={cat}
                                onSave={this.saveCat}
                                onChange={this.updateCatState}
                                onFileChange={this.updateCatFile}
                                saving={this.state.saving}
                            />
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="col-md-8 col-md-offset-2">
                <div className="card">
                    <div className="form-group">
                        <h1>{cat.label}</h1>

                        <div className="form-group">
                            <div className="field">
                                <p>value: {cat.value}</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="field">
                                <p>label: {cat.label}</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="field">
                                <img src={apiUrl + "/uploads/categories/" + cat.icon} alt={'icon'}/>
                            </div>
                        </div>
                        <div className="card-body">
                            <button type="button" onClick={this.toggleEdit} className="btn btn-primary">Chỉnh sửa
                            </button>
                            <button type="button" onClick={this.deleteCat} className="btn btn-danger">Xóa</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

CatPage.propTypes = {
    cat: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(catActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let cats = state.cats;
    let cat = {_id: '', value: '', label: '', icon: ''};
    let id = ownProps.match.params.id;
    if (cats && id) {
        cat = Object.assign({}, state.cats.find(cat => cat._id === id));
    }
    return {cat: cat};
}

export default connect(mapStateToProps, mapDispatchToProps)(CatPage);

