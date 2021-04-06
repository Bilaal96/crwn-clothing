import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import CustomButton from '../custom-button/custom-button.component';

const SignInAside = () => {
    const history = useHistory();

    return (
        <>
            <h2>New to CRWN Clothing?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit adipisci eius ad tenetur, voluptatibus maxime,
                ducimus sit magni culpa ea saepe nisi illum eveniet cupiditate!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                omnis, quo quas, architecto in nisi eligendi quia eveniet, nihil
                tempora dicta odio ex molestias! Atque repellendus nostrum
                maxime ducimus, facere corporis sed, laudantium consequuntur
                unde nobis quasi porro ea, cum voluptatibus voluptates
                perspiciatis commodi eos culpa animi dignissimos? Totam fuga
                atque ab! Excepturi sed nostrum molestiae laboriosam, nam, nisi
                eligendi ex dolorum voluptatum magni maxime, animi quidem. Natus
                distinctio adipisci sint nisi perferendis rem, impedit
                similique, est quia vel eligendi praesentium ex voluptatum? Modi
                perferendis, iste eligendi ullam recusandae quod illum harum
                iure fugiat temporibus reprehenderit facere minus dicta
            </p>
            <CustomButton onClick={() => history.push('/sign-up')}>
                CREATE AN ACCOUNT
            </CustomButton>
        </>
    );
};

export default SignInAside;
