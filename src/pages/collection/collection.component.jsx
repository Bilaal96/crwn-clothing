import React from 'react';
import { connect } from 'react-redux';

// Selectors
import { selectShopCollection } from '../../redux/shop/shop.selectors';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match, collection }) => {
    console.log('collection => ', collection);
    return (
        <div className="collection-page">
            <h2>Collection Page</h2>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.collectionId)(state), // => curried function call
});

export default connect(mapStateToProps)(CollectionPage);
