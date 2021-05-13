import React from 'react';

import * as SC from './form-text-area.styles';

const FormTextArea = ({ handleChange, ...otherProps }) => {
    const { value, maxLength } = otherProps;
    const charactersUsed = value.length;

    return (
        <>
            <SC.TextArea
                className="maintain-focus"
                onChange={handleChange}
                {...otherProps}
            ></SC.TextArea>

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
