import React from 'react'
import imgTest from '../../assets/test.png'
import { ModalDeleteImage } from '../index'

const ImageItem = ({ openDeleteModal }) => {

    

    return (
        <div className='image__item'>
            <img src={imgTest} alt="test" />
            <div className='image__overlay'>
                <div className='image__info'>
                    <button onClick={ openDeleteModal( ModalDeleteImage, { deleteId: 'test' } ) }> delete </button>
                    <p> Label </p>
                </div>
            </div>
        </div>
    )
}

export default ImageItem