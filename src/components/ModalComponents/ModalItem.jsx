import React from 'react'
import ModalDeleteImage from './ModalDeleteImage'
import ModalUploadImage from './ModalUploadImage'

const ModalItem = ({ Modal, handleClose, modalProps }) => {
    return (
        <div className='modal__item'>
            <Modal handleClose={handleClose} {...modalProps} />
        </div>
    )
}

export default ModalItem