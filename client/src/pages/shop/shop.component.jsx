import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

// Actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Components
import Spinner from '../../components/spinner/spinner.component';

// Components --> Lazy Loaded
const CollectionsOverview = lazy(() =>
    import(
        '../../components/collections-overview/collections-overview.container.js'
    )
);

const CollectionPage = lazy(() =>
    import('../collection/collection.container.js')
);

const ShopPage = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

    return (
        <section className="shop">
            <Suspense fallback={<Spinner />}>
                <Route
                    exact
                    path={`${match.path}`} // path: '/shop'
                    component={CollectionsOverview}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPage}
                />
            </Suspense>
        </section>
    );
};

export default ShopPage;
