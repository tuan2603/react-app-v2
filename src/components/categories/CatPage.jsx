import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";
import {apiUrl} from "../../utils";

class CatPage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        let {cat} = this.props;
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{cat.label}</h1>
                <p>value: {cat.value}</p>
                <p>label: {cat.label}</p>
                <img src={apiUrl + "/uploads/categories/" + cat.icon} alt={'icon'}/>
            </div>
        )
    }
}

CatPage.propTypes = {
    cat: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    let cats = state.cats;
    let cat = {_id: '', value: '', label: '', icon: ''};
    let id = ownProps.match.params.id;
    if (cats) {
        cat = Object.assign({}, state.cats.find(cat => cat._id === id));
    }
    return {cat: cat};
}

export default connect(mapStateToProps)(CatPage);

