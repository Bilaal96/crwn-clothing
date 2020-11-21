import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectSingleCollection } from '../../redux/shop/shop.selectors';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = (props) => {
    // Retrieval of a SINGLE collection relies on props.match
    // -- useSelector() does not have direct access to props like mapState does
    // -- So we use a closure to pass props to selectSingleCollection
    const collection = useSelector((state) =>
        selectSingleCollection(state, props)
    );

    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title.toUpperCase()}</h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPage;
