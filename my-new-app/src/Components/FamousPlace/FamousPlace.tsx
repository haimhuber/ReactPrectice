import './FamousPlace.css';

import React from 'react'

type FamousPlaceProps = {
    name : string;
    country : string;
    imageUrl : string;
}

export const FamousPlace:React.FC<FamousPlaceProps> = 
({name, country, imageUrl }) => {
    return(
        <div>
            <h2>{name}</h2>
            <p>{country}</p>
            <img src={imageUrl} />
        </div>
    )
}
