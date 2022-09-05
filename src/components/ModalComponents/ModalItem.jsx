import React from 'react'
import ModalDeleteImage from './ModalDeleteImage'
import ModalUploadImage from './ModalUploadImage'

const ModalItem = ({ Modal, handleClose, modalProps, handleUpload, handleDelete }) => {
    return (
        <div className='modal__item'>
            <Modal handleClose={handleClose} handleUpload={handleUpload} handleDelete={handleDelete} {...modalProps} />
        </div>
    )
}

export default ModalItem