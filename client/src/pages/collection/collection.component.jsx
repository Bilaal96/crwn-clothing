import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectSingleCollection } from '../../redux/shop/shop.selectors';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

// Styled Components
import PageHeading from '../../components/styled/page-heading';
import * as SC from './collection.styles';

const CollectionPage = (props) => {
    // Retrieval of a SINGLE collection relies on props.match
    // -- useSelector() does not have direct access to props like mapState does
    // -- So we use a closure to pass props to selectSingleCollection
    const collection = useSelector((state) =>
        selectSingleCollection(state, props)
    );

    const { title, items } = collection;

    return (
        <SC.CollectionPage className="collection-page">
            <PageHeading className="title">{title.toUpperCase()}</PageHeading>
            <SC.CollectionItemsGrid className="items">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </SC.CollectionItemsGrid>
        </SC.CollectionPage>
    );
};

export default CollectionPage;
