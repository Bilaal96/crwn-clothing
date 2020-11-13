import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

export default CollectionsOverview;
