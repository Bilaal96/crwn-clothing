import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Selectors
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

// Components
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

// Container wraps the Component with all HOCs needed to give the it the desired functionality
// -- Here, it ensures that CollectionsOverview has access to the isFetching/isLoading state-value via props
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching,
});

// compose() is provided by Redux for convenience & readability
// -- each func must receive one arg.
// -- return val of func on right is passed as arg. to func on left
// -- rightmost func is the exception --> it may accept multiple params
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps), // receives spinner
    withSpinner // returns spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
