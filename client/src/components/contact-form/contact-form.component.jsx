import React, { useState } from 'react';

// Components
import FormInput from '../form-input/form-input.component';
import FormSelect from '../form-select/form-select.component';
import FormTextArea from '../form-text-area/form-text-area.component';

// Styled Components
import * as SC from '../styled/form';
import { ButtonOutlined } from '../styled/button';

const ContactForm = () => {
    const selectOptions = ['Customer Enquiry', 'Business Enquiry', 'Other'];

    const [userEnquiry, setUserEnquiry] = useState({
        fullName: '',
        email: '',
        subject: 'customer-enquiry',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserEnquiry({
            ...userEnquiry,
            [name]: value,
        });
    };

    const { fullName, email, subject, message } = userEnquiry;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Contact Form State', userEnquiry);

        alert(`Contact Form State:\n
           > Full Name: ${fullName}\n
           > Email: ${email}\n
           > Subject: ${subject}\n
           > Message: ${message}
        `);
    };

    return (
        <>
            <SC.FormTitle>How can we help?</SC.FormTitle>
            <SC.FormWrapper>
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>
                            This page is presentational only and contact details
                            are completely random. Clicking "Send" will output
                            form state.
                        </legend>

                        <FormInput
                            handleChange={handleChange}
                            label="Full Name"
                            type="text"
                            name="fullName"
                            value={fullName}
                            required
                        />
                        <FormInput
                            handleChange={handleChange}
                            label="Email"
                            type="email"
                            name="email"
                            value={email}
                            required
                        />

                        {/* Subject */}
                        <FormSelect
                            handleChange={handleChange}
                            id="subject"
                            label="Subject"
                            name="subject"
                            options={selectOptions}
                            selectedOption={subject}
                            // CHECK:
                            // - HOW TO GET VALUE
                            // - Set default selected
                            // IF NECESSARY => make new method handleSelectChange
                            // handleChange={handleChange}
                            // value={subject}
                        />

                        {/* Enquiry Message */}
                        <FormTextArea
                            handleChange={handleChange}
                            name="message"
                            value={message}
                            maxLength={1400}
                            placeholder="Type enquiry here . . ."
                            required
                        />

                        <div className="buttons-container">
                            <ButtonOutlined
                                type="submit"
                                primary="bahamaBlue"
                                extend
                            >
                                Send
                            </ButtonOutlined>
                        </div>
                    </fieldset>
                </form>
            </SC.FormWrapper>
        </>
    );
};

export default ContactForm;
