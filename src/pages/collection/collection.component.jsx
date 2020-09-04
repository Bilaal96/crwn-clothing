import React from 'react';
import { connect } from 'react-redux';

// Selectors
import { selectSingleCollection } from '../../redux/shop/shop.selectors';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match, collection }) => {
    console.log('collection => ', collection);
    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem id={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectSingleCollection(ownProps.match.params.collectionId)(
        state
    ), // => curried function call
});

export default connect(mapStateToProps)(CollectionPage);
