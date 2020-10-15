import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Selectors
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

// Components
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
