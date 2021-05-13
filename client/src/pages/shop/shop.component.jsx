import React, { useEffect, lazy, Suspense, Profiler } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

// Actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Components
import Spinner from '../../components/spinner/spinner.component';

// Lazy Components
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
                <Profiler
                    id="CollectionsOverview"
                    onRender={(id, phase, actualDuration, baseDuration) => {
                        console.log({
                            id,
                            phase,
                            actualDuration,
                            baseDuration,
                        });
                    }}
                >
                    <Route
                        exact
                        path={`${match.path}`} // path: '/shop'
                        component={CollectionsOverview}
                    />
                </Profiler>

                <Profiler
                    id="Collection"
                    onRender={(id, phase, actualDuration, baseDuration) => {
                        console.log({
                            id,
                            phase,
                            actualDuration,
                            baseDuration,
                        });
                    }}
                >
                    <Route
                        path={`${match.path}/:collectionId`}
                        component={CollectionPage}
                    />
                </Profiler>
            </Suspense>
        </section>
    );
};

export default ShopPage;
