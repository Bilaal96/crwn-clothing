import React from 'react';
import { useRouteMatch } from 'react-router-dom';

// Components
import CollectionItem from '../collection-item/collection-item.component';

// Styled Components
import * as SC from './collection-preview.styles';

const CollectionPreview = ({ routeName, title, items }) => {
    const match = useRouteMatch();
    const previewItemsLimit = 5;

    return (
        <SC.CollectionPreview>
            <SC.CollectionPreviewTitle>
                <SC.CollectionRouterLink to={`${match.path}/${routeName}`}>
                    <SC.CollectionName>
                        SHOP <span>{title.toUpperCase()}</span>
                    </SC.CollectionName>
                </SC.CollectionRouterLink>
            </SC.CollectionPreviewTitle>
            <SC.PreviewItemsGrid
                className="preview-items"
                numOfCols={previewItemsLimit}
            >
                {items
                    .filter((item, index) => index < previewItemsLimit)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </SC.PreviewItemsGrid>
        </SC.CollectionPreview>
    );
};

export default CollectionPreview;
