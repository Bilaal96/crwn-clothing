import React from 'react';

// Components
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignInAside from '../../components/sign-in-aside/sign-in-aside.component';

// Styled Components
import PageHeading from '../../components/styled/page-heading';
import {
    ContentGrid,
    ContentGridItem,
    ContentBox,
} from '../../components/styled/content-grid';

const SignInPage = () => {
    return (
        <section className="sign-in">
            <PageHeading>MY ACCOUNT</PageHeading>

            <ContentGrid>
                <ContentGridItem colStart="1" colEnd="8">
                    <ContentBox>
                        <SignInForm />
                    </ContentBox>
                </ContentGridItem>

                <ContentGridItem colStart="8" colEnd="-1">
                    <ContentBox>
                        <SignInAside />
                    </ContentBox>
                </ContentGridItem>
            </ContentGrid>
        </section>
    );
};

export default SignInPage;
