import React from 'react';

// Styled Components
import * as SC from './form-text-area.styles';

const FormTextArea = ({ handleChange, ...otherProps }) => {
    // Vars to display character count
    const { value, maxLength } = otherProps;
    const charactersUsed = value.length;

    return (
        <>
            <SC.TextArea
                className="maintain-focus"
                onChange={handleChange}
                {...otherProps}
            />

            {/* Display character count if maxLength prop is provided */}
            {maxLength && (
                <SC.CharCount $charsUsed={charactersUsed} $maxChars={maxLength}>
                    {charactersUsed === parseInt(maxLength) && (
                        <span>Character Limit Reached: </span>
                    )}

                    <span>
                        {charactersUsed} / {maxLength}
                    </span>
                </SC.CharCount>
            )}
        </>
    );
};

export default FormTextArea;
