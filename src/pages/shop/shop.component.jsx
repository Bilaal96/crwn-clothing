import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Actions
import { updateCollections } from '../../redux/shop/shop.actions';

// Pages
import CollectionPage from '../collection/collection.component';

// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Firebase Utils
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

// Make CollectionsOverview & CollectionPage aware of loading state
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        // Get reference object to "collections" collection
        const collectionsRef = firestore.collection('collections');

        // ----- Get Collections Data from Firestore -----
        // --- Promise Pattern ---
        collectionsRef.get().then((snapshot) => {
            // Convert collections snapshot from array to object using custom firebase util function
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            // Update shopReducer's collections state-value with collectionsMap object
            updateCollections(collectionsMap);

            // Reset loading state
            this.setState({ loading: false });
        });

        // --- Observer Pattern ---
        /*
        // Listen for changes in "collections" collection
        collectionsRef.onSnapshot(async (snapshot) => {
            // console.log("snapshot =>", snapshot); //? test

            // Convert collections snapshot from array to object using custom firebase util function
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            // console.log('collectionsMap =>', collectionsMap); //? test

            // Update shopReducer's collections state-value with collectionsMap object
            updateCollections(collectionsMap);

            // Reset loading state
            this.setState({ loading: false });
        });
        */
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`} // path: '/shop'
                    render={(props) => (
                        <CollectionsOverviewWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
