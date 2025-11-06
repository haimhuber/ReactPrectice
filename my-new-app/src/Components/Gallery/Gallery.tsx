import './Gallery.css';
import React from 'react'

type GalleryProps = {
    title: string;
    images: string[];
}


export const Gallery: React.FC<GalleryProps> =
    ({ title, images }) => {
        return (
            <div className='gallery-card'>
                <h1 className='main'>{title}</h1>
                {images.map((src, index) => (
                    <img key={index} src={src} alt="" />
                ))}
            </div>
        );
    }

