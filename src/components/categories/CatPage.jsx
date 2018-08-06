import React, {Component} from 'react';
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
        this.state = {isEditing: false, cat:this.props.cat};
        autoBind(this);
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
        this.props.actions.updateCats(this.state.cat);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.cat._id !== nextProps.cat._id) {
            this.setState({cat: nextProps.cat});
        }
    }

    render() {
        let {cat} = this.props;
        if (this.state.isEditing) {
            return (
                <div className="col-md-8 col-md-offset-2">
                    <h1> Chỉnh sửa </h1>
                    <CatForm cat={cat} onSave={this.saveCat} onChange={this.updateCatState}/>
                </div>
            )
        }
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{cat.label}</h1>
                <p>value: {cat.value}</p>
                <p>label: {cat.label}</p>
                <img src={apiUrl + "/uploads/categories/" + cat.icon} alt={'icon'}/>
                <button onClick={this.toggleEdit}>Chỉnh sửa</button>
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
    if (cats && id ) {
        cat = Object.assign({}, state.cats.find(cat => cat._id === id));
    }
    return {cat: cat};
}

export default connect(mapStateToProps,mapDispatchToProps)(CatPage);

