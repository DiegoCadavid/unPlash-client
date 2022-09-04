import React from 'react'
import ImageItem from './ImageItem'

const ImageColumn = ({ openDeleteModal }) => {
  return (
    <div className='image__column'>
        <ImageItem openDeleteModal={openDeleteModal}/>
        <ImageItem openDeleteModal={openDeleteModal}/>
        <ImageItem openDeleteModal={openDeleteModal}/>

    </div>
  )
}

export default ImageColumn