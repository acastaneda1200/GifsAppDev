import React from 'react'

export const GifGridItem = ( {id, title, images}) => {
    
    return (
        <div className="card animate__animated animate__fadeInLeftBig">
           <img src={images} alt={title}></img>
           <p>{title}</p>
        </div>
    )
}
