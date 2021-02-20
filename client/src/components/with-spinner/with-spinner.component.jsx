import React from 'react';

import * as SC from './with-spinner.styles';

const withSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SC.SpinnerOverlay>
                <SC.Spinner />
            </SC.SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export default withSpinner;
