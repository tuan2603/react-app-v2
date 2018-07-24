import React from 'react';

class Alert extends React.Component {
    render() {
        return (
            <div className="col-sm-12">
                <div className="alert  alert-success alert-dismissible fade show" role="alert">
                    <span className="badge badge-pill badge-success">Success</span> You successfully read
                    this important alert message.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Alert;
