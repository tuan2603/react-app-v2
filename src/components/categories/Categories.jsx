import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import CatList from './CatList';
import {bindActionCreators} from 'redux';
import "./Categories.css";
import autoBind from "react-autobind";
import * as actions from '../../actions/catsActions';

class Categories extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentWillMount() {
        //if (this.props.cats[0]._id == undefined && this.props.cats[0]._id === '') 
        {
            this.props.actions.loadCats();
        }
    }
    componentDidMount() {
        document.title = "Các gói tài sản vay"
    }

    render() {
        let {cats,children} = this.props;

        if (children === undefined && cats.length > 1) {
               return  <Redirect to={`/page-categories.html/${cats[0]._id}`} />;
        }
        return (
            <div className="content mt-3">
                <div className="animated fadeIn">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Danh mục </h1>
                        </div>
                        <div className="col-md-8">
                            <Link to={'/page-categories.html/new'} className="btn btn-primary">
                                + tạo mới
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-4">
                                <CatList cats={cats}/>
                            </div>
                            <div className="col-md-8">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Categories.propTypes = {
    cats: PropTypes.array.isRequired,
    children: PropTypes.object
};

function mapStateToProps(state) {
    if (state.cats) {
        return {
            cats: state.cats
        };
    } else {
        return {
            cats: [{_id: '', value: '', label: '', icon: ''}]
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

