import React from 'react';

import * as SC from './divider.styles';

const Divider = ({ content, ...otherProps }) => {
    // If content exists and has length > 0, render content
    // -- content && content.length && content
    // -- shorthand => !!content?.length && content
    const hasContent = !!content?.length;

    return (
        <SC.Divider hasContent={hasContent} {...otherProps}>
            {hasContent && content}
        </SC.Divider>
    );
};

export default Divider;
