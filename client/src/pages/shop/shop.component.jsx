import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

// Actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Pages
import CollectionPageContainer from '../collection/collection.container.js';

// Components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container.js';

const ShopPage = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

    return (
        <section className="shop">
            <Route
                exact
                path={`${match.path}`} // path: '/shop'
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </section>
    );
};

export default ShopPage;
