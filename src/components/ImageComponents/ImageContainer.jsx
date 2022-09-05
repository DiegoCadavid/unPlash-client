import React, { useEffect, useState } from 'react'
import ImageColumn from './ImageColumn'

import chunkify from '../../helpers/divideArray'

const ImageContainer = ({ openDeleteModal, images, numberColums }) => {

    const [imagesColumnData, setImagesColumnData] = useState([]);
    useEffect(() => {
        setImagesColumnData(chunkify(images, numberColums))
    }, [images,numberColums])


    return (
        <div className='image__container'>
            { imagesColumnData.map( ( e, i ) => {
                return (<ImageColumn key={`Column ${i + 1}`} openDeleteModal={openDeleteModal} images={e} />)
            }) }
        </div>
    )
}

export default ImageContainer