import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as catActions from '../../actions/catsActions';
import CatForm from './CatForm';
import autoBind from "react-autobind";


class NewCatPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cat: {
                _id: '',
                value: '',
                label: '',
                icon: '',
            },
            saving: false
        };
        autoBind(this);
    }


    updateCatState(event) {
        const field = event.target.name;
        const cat = this.state.cat;
        cat[field] = event.target.value;
        return this.setState({cat: cat});
    }

    saveCat(event) {
        event.preventDefault();
        this.props.actions.createCats(this.state.cat)
    }

    render() {
        return (
            <div>
                <h1>new cat</h1>
                <CatForm
                    cat={this.state.cat}
                    onSave={this.saveCat}
                    onChange={this.updateCatState}
                   />
            </div>
        );
    }
}



NewCatPage.propTypes = {
    cat: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        cat: state.cat
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(catActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCatPage);