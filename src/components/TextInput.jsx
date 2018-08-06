import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, onChange, label, value}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={label}
                    defaultValue={value}
                    onChange={onChange}/>
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    value: PropTypes.string
};

export default TextInput;
