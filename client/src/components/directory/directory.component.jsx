import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Components
import MenuItem from '../menu-item/menu-item.component';

// Styles
import { DirectoryWrapper } from './directory.styles';

const Directory = () => {
    const directorySections = useSelector(selectDirectorySections);
    return (
        <DirectoryWrapper className="directory-menu">
            {directorySections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </DirectoryWrapper>
    );
};

export default Directory;
