import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

// Styled Components
import * as SC from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();
    const match = useRouteMatch();

    const goToCollectionPage = (e) => {
        if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
            history.push(`${match.path}${linkUrl}`);
        }
    };

    return (
        <SC.MenuItem
            tabIndex="0"
            onKeyUp={goToCollectionPage}
            onClick={goToCollectionPage}
            $menuItemTitle={title}
        >
            <SC.BackgroundImage imageUrl={imageUrl} />
            <SC.Content>
                <SC.Title>{title.toUpperCase()}</SC.Title>
                <SC.Subtitle>SHOP NOW</SC.Subtitle>
            </SC.Content>
        </SC.MenuItem>
    );
};

export default MenuItem;
