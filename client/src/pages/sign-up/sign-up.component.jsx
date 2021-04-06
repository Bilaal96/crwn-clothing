import React from 'react';

// Components
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignUpAside from '../../components/sign-up-aside/sign-up-aside.component';

// Styled Components
import PageHeading from '../../components/styled/page-heading';
import {
    ContentBoxContainer,
    ContentBox,
    AuthFormBox,
} from '../../components/styled/content-box';

const SignUpPage = () => {
    return (
        <>
            <PageHeading>JOIN US</PageHeading>
            <ContentBoxContainer>
                <AuthFormBox>
                    <SignUpForm />
                </AuthFormBox>
                <ContentBox>
                    <SignUpAside />
                </ContentBox>
            </ContentBoxContainer>
        </>
    );
};

export default SignUpPage;