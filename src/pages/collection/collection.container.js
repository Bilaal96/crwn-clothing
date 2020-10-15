import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Selectors
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// Components
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage);

export default CollectionPageContainer;
