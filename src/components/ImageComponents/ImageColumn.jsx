import React from 'react'
import ImageItem from './ImageItem'

const ImageColumn = ({ openDeleteModal, images }) => {
  return (
    <div className='image__column'>

        { images.map( ( e ) => {
          return ( <ImageItem key={e.id} url={e.url} label={e.label} id={e.id} openDeleteModal={openDeleteModal}/>)
        }) }

    </div>
  )
}

export default ImageColumn