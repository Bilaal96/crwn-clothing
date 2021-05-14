import React from 'react';

// Styled Compononents
import * as SC from './contact-detail.styles';

const ContactDetail = ({ title, value }) => {
    return (
        <SC.ContactDetail>
            <SC.Title>{title}</SC.Title>
            <SC.Value>{value}</SC.Value>
        </SC.ContactDetail>
    );
};

export default ContactDetail;
