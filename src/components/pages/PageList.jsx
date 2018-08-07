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
                            <th scope="col">Chuyên mục</th>
                            <th scope="col">Tiêu Đề</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pages.map((page, i) =>
                            <tr>
                                <th scope="row">{i+1}</th>
                                <td>{page.categories}</td>
                                <td><Link to={'/trang.html/' + page._id}>{page.title}</Link></td>
                                {/*<td dangerouslySetInnerHTML={{__html:page.content.split('\n')[0]}} />*/}
                            </tr>
                        )}

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

