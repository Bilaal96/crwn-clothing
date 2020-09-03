import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import CollectionPage from '../collection/collection.component';

// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`} // path: '/shop'
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
};

export default ShopPage;
