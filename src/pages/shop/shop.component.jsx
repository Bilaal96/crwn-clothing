import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Pages
import CollectionPageContainer from '../collection/collection.container.js';

// Components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container.js';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`} // path: '/shop'
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
