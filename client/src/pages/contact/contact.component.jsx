import React from 'react';

// Components
import ContactDetail from '../../components/contact-detail/contact-detail.component';
import ContactForm from '../../components/contact-form/contact-form.component';

// Styled Components
import PageHeading from '../../components/styled/page-heading.js';
import {
    ContentGrid,
    ContentGridItem,
    ContentBox,
} from '../../components/styled/content-grid.js';
import * as SC from './contact.styles';

const ContactPage = () => {
    return (
        <section className="contact">
            <PageHeading>Get In Touch</PageHeading>
            <ContentGrid>
                <ContentGridItem colStart="1" colEnd="5">
                    <ContentBox>
                        {/* Contact Details
                         * For customer support
                         * phone
                         * email
                         */}
                        <SC.AsideHeading>Customer Support</SC.AsideHeading>

                        <ContactDetail
                            title="Email"
                            value="crown-clothing@support.co.uk"
                        />
                        <ContactDetail
                            title="Phone No."
                            value="0161 789 4567"
                        />
                        <ContactDetail
                            title="Return Address"
                            value={`22A Westbrook Park, Trafford Park, Manchester, M20 ELQ`}
                        />

                        <SC.GoogleMap
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5648.642020367163!2d-2.311491999404253!3d53.46914970825459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x487bae6447ad7195%3A0x317fbcba931447d2!2sWestbrook%20Park%2C%20Westbrook%20Rd%2C%20Trafford%20Park%2C%20Stretford%2C%20Manchester%20M17%201AY!3m2!1d53.469000699999995!2d-2.3072931999999997!5e0!3m2!1sen!2suk!4v1620753858211!5m2!1sen!2suk"
                            allowFullScreen={true}
                            loading="lazy"
                        ></SC.GoogleMap>
                    </ContentBox>
                </ContentGridItem>
                <ContentGridItem colStart="5" colEnd="-1">
                    <ContentBox>
                        {/* 
                          Header: How can we help?
                          Contact Form for Enquiries

                            * name
                            * email
                            subject dropdown
                            * textarea
                           * Include "Subject" dropdown
                            - General Enquiry
                            - Business Enquiry
                            - Other

                          */}
                        <ContactForm />
                    </ContentBox>
                </ContentGridItem>
            </ContentGrid>
        </section>
    );
};

export default ContactPage;
