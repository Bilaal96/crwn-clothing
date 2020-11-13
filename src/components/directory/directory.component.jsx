import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Components
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
    const directorySections = useSelector(selectDirectorySections);
    return (
        <div className="directory-menu">
            {directorySections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
};

export default Directory;
