import React from 'react';

// Styled Components
import * as SC from './form-input.styles';

// import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <SC.FormGoup className="form-group">
        <SC.FormInput
            className="form-input"
            onChange={handleChange}
            {...otherProps}
        />
        {label && (
            <SC.FormInputLabel
                className={`${
                    otherProps.value.length && 'shrink'
                } form-input-label`}
            >
                {label}
            </SC.FormInputLabel>
        )}
    </SC.FormGoup>
);

export default FormInput;
