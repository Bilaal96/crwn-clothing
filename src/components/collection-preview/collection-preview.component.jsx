import React from 'react';
import { withRouter } from 'react-router-dom';

// Components
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ history, match, routeName, title, items }) => (
    <div className="collection-preview">
        <h1 className="collection-preview-title">
            <span
                className="collection-link"
                onClick={() => history.push(`${match.path}/${routeName}`)}
            >
                VIEW{' '}
                <span className="collection-name">{title.toUpperCase()}</span>{' '}
                COLLECTION
            </span>
        </h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default withRouter(CollectionPreview);
