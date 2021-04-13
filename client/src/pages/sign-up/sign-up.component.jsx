import React from 'react';

// Components
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignUpAside from '../../components/sign-up-aside/sign-up-aside.component';

// Styled Components
import PageHeading from '../../components/styled/page-heading';
import {
    ContentGrid,
    ContentGridItem,
    ContentBox,
} from '../../components/styled/content-grid';

const SignUpPage = () => {
    return (
        <>
            <PageHeading>JOIN US</PageHeading>

            <ContentGrid widthLg="90%">
                <ContentGridItem colStart="1" colEnd="8">
                    <ContentBox>
                        <SignUpForm />
                    </ContentBox>
                </ContentGridItem>

                <ContentGridItem colStart="8" colEnd="-1">
                    <ContentBox>
                        <SignUpAside />
                    </ContentBox>
                </ContentGridItem>
            </ContentGrid>
        </>
    );
};

export default SignUpPage;
