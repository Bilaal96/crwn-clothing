import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';

// Styled Components
import * as SC from './collections-overview.styles';

// import './collections-overview.styles.scss';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);
    return (
        <SC.CollectionsOverview>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </SC.CollectionsOverview>
    );
};

export default CollectionsOverview;
