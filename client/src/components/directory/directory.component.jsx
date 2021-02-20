import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Components
import MenuItem from '../menu-item/menu-item.component';

// Styled Components
import * as SC from './directory.styles';

const Directory = () => {
    const directorySections = useSelector(selectDirectorySections);

    return (
        <SC.Directory>
            {directorySections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </SC.Directory>
    );
};

export default Directory;
