import React from 'react'
import PropTypes  from 'prop-types';

export const GifGridItem = ( {title, images}) => {
    
    return (
        <div className="card animate__animated animate__fadeInLeftBig">
           <img src={images} alt={title}></img>
           <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
}


