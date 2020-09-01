import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Components
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
