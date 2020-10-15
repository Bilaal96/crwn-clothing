import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Pages
import CollectionPageContainer from '../collection/collection.container.js';

// Components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container.js';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;

        // Set isFetching: true in shopReducer
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;

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
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
