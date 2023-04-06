import React from 'react';
import { useParams } from 'react-router-dom';

import PropertiesList from '../PropertiesList';

const Property = () => {
    const { id } = useParams();
    const property = PropertiesList[id]

    const { name, image } = property;

    return(
        <>
        <h3>
            {name}
            <img src={image} alt={name} style={{width: '500px'}} />
        </h3>
        </>
    )
}

export default Property;