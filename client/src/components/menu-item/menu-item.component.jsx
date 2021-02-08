import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImage,
    Content,
    Title,
    Subtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();
    const match = useRouteMatch();

    return (
        <MenuItemContainer
            className={`menu-item ${title}`}
            onClick={() => history.push(`${match.path}${linkUrl}`)}
        >
            <BackgroundImage className="background-image" imageUrl={imageUrl} />
            <Content className="content">
                <Title className="title">{title.toUpperCase()}</Title>
                <Subtitle className="subtitle">SHOP NOW</Subtitle>
            </Content>
        </MenuItemContainer>
    );
};

export default MenuItem;
