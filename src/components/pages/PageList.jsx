import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import autoBind from "react-autobind";

class PageList extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        let {pages} = this.props;
        if (pages) {
            return (
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tiêu Đề</th>
                            <th scope="col">Tác giả</th>
                            <th scope="col">Thờigian</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pages.map((page, i) => {
                            let dateview = page.updated_at !== undefined ? page.updated_at : (page.create_at !== undefined ? page.create_at : Date.now());
                            return <tr key={page._id}>
                                <th scope="row">{i + 1}</th>
                                <td><Link to={'/trang.html/' + page._id}>{
                                    (page.title !== undefined) && page.title
                                }</Link></td>
                                <td>{
                                    page.author !== undefined && page.author.fullName !== undefined && page.author.fullName
                                }</td>
                                <td>{
                                    new Intl.DateTimeFormat('en-GB', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit'
                                    }).format(dateview)
                                }</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tiêu Đề</th>
                            <th scope="col">Nội Dung</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                    </table>
                </div>
            )
        }

    }

};

PageList.propTypes = {
    pages: PropTypes.array.isRequired,
};


export default (PageList);

