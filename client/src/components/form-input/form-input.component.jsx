import React from 'react';

// Styled Components
import * as SC from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <SC.FormGoup className="form-group">
        <SC.FormInput
            className="maintain-focus"
            onChange={handleChange}
            {...otherProps}
        />
        {label && (
            <SC.FormInputLabel
                className={`${
                    otherProps.value?.length && 'shrink'
                } form-input-label`}
            >
                {label}
            </SC.FormInputLabel>
        )}
    </SC.FormGoup>
);

export default FormInput;
