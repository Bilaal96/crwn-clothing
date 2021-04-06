import React from 'react';

// Components
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignInAside from '../../components/sign-in-aside/sign-in-aside.component';

// Styled Components
import PageHeading from '../../components/styled/page-heading';
import {
    ContentBoxContainer,
    ContentBox,
    AuthFormBox,
} from '../../components/styled/content-box';

const SignInPage = () => {
    return (
        <>
            <PageHeading>MY ACCOUNT</PageHeading>

            <ContentBoxContainer>
                <AuthFormBox>
                    <SignInForm />
                </AuthFormBox>

                <ContentBox>
                    <SignInAside />
                </ContentBox>
            </ContentBoxContainer>
        </>
    );
};

export default SignInPage;
