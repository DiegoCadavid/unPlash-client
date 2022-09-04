import React from 'react'
import ImageColumn from './ImageColumn'

const ImageContainer = ({ openDeleteModal }) => {
    return (
        <div className='image__container'>
            <ImageColumn openDeleteModal={openDeleteModal} />
            <ImageColumn openDeleteModal={openDeleteModal} />
            <ImageColumn openDeleteModal={openDeleteModal} />
        </div>
    )
}

export default ImageContainer