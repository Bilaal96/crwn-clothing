import React from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// Components
import DirectoryItem from '../directory-item/directory-item.component';

// Styled Components
import * as SC from './directory.styles';

const Directory = () => {
    const directorySections = useSelector(selectDirectorySections);

    return (
        <SC.Directory>
            {directorySections.map(({ id, ...otherSectionProps }) => (
                <DirectoryItem key={id} {...otherSectionProps} />
            ))}
        </SC.Directory>
    );
};

export default Directory;
