import React from 'react'
import imgTest from '../../assets/test.png'
import { ModalDeleteImage } from '../index'

const ImageItem = ({ openDeleteModal, label, url, id }) => {

    

    return (
        <div className='image__item'>
            <img src={url} alt={label} />
            <div className='image__overlay'>
                <div className='image__info'>
                    <button onClick={ openDeleteModal( ModalDeleteImage, { deleteId: id } ) }> delete </button>
                    <p> {label} </p>
                </div>
            </div>
        </div>
    )
}

export default ImageItem