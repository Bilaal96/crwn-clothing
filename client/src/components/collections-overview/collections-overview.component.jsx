import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';

// Styled Components
import PageHeading from '../styled/page-heading';
import * as SC from './collections-overview.styles';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <SC.CollectionsOverview className="collections-overview">
            <PageHeading>BROWSE COLLECTIONS</PageHeading>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </SC.CollectionsOverview>
    );
};

export default CollectionsOverview;
