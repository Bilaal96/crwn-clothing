import React from 'react';

// Styled Components
import * as SC from './/form-select.styles';

const FormSelect = ({
    label,
    id, // label reference point
    handleChange,
    selectedOption, // initially / currently selected option
    options: optionsTextArray, // an array of select's visible options
    ...otherProps
}) => {
    return (
        <SC.FormSelectGroup>
            {label && (
                <SC.Label className="maintain-focus" htmlFor={id}>
                    {label}:
                </SC.Label>
            )}

            <SC.SelectWrapper>
                <SC.Select
                    id={id}
                    className="form-select maintain-focus"
                    onChange={handleChange}
                    value={selectedOption} // initially / currently selected option
                    {...otherProps}
                >
                    {optionsTextArray.map((optionText, index) => {
                        // Format value of <option> sent to server: lowercase & hyphenated; no whitespace
                        const value = optionText
                            .toLowerCase()
                            .split(' ')
                            .join('-');

                        return (
                            <option key={index} value={value}>
                                {optionText}
                            </option>
                        );
                    })}
                </SC.Select>
                <SC.SelectArrow />
            </SC.SelectWrapper>
        </SC.FormSelectGroup>
    );
};
export default FormSelect;
