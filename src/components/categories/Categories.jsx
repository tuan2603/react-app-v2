import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CatList from './CatList';
import "./Categories.css";
import autoBind from "react-autobind";

class Categories extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        let {cats} = this.props;
        return (
            <div className="content mt-3">
                <div className="animated fadeIn">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Danh mục <br />
                                <Link to={'/page-categories.html/new'} className="btn btn-primary">
                                     + tạo mới
                                </Link>
                            </h1>
                            <br />
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

export default connect(mapStateToProps)(Categories);

