import React from 'react';

// Styled Components
import * as SC from './custom-button.styles';

// Render a styled button - see custom-button.styles.jsx
const CustomButton = ({ children, ...otherProps }) => (
    <SC.CustomButton {...otherProps}>{children}</SC.CustomButton>
);

export default CustomButton;
