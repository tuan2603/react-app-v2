import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
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
            saving: false,
            file: '',
            isRedirect: false
        };
        autoBind(this);
    }


    updateCatState(event) {
        const field = event.target.name;
        const cat = this.state.cat;
        cat[field] = event.target.value;
        return this.setState({cat: cat});
    }

    updateCatFile(file) {
        return this.setState({file});
    }

    saveCat(event) {
        event.preventDefault();
        const data = new FormData();
        data.append('icon', this.state.file);
        data.append('value',this.state.cat.value);
        data.append('label', this.state.cat.label);
        this.props.actions.createCats(data)
            .then(cat=>{
                if (cat) {
                    this.setState({cat, isRedirect:true});
                }
            });

    }

    render() {
        let {isRedirect, cat} = this.state;
        if (isRedirect && cat._id) {
            return  <Redirect to={`/page-categories.html/${cat._id}`} />;
        }
        return (
            <div>
                <h1>Tạo mới danh mục</h1>
                <CatForm
                    cat={this.state.cat}
                    onSave={this.saveCat}
                    onChange={this.updateCatState}
                    onFileChange={this.updateCatFile}
                   />
            </div>
        );
    }
}



NewCatPage.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(catActions, dispatch)
    };
}
function mapStateToProps(state) {
    return {cats : state.cats};
}


export default connect(mapStateToProps,mapDispatchToProps)(NewCatPage);
