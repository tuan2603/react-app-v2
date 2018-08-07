import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";

class CatList extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        let { cats } = this.props;
        if (cats) {
            return (
                <ul className="list-group">
                    {cats.map(cat =>
                    <li className="list-group-item" key={cat._id}>
                    <Link to={'/page-categories.html/' + cat._id} >{cat.label}</Link>
                    </li>
                    )}
                </ul>
            )
        }else{
            return (
                <ul className="list-group">
                        <li className="list-group-item" >
                           null
                        </li>
                </ul>
            )
        }

    }

};

CatList.propTypes = {
    cats: PropTypes.array.isRequired,
};



export default (CatList);

