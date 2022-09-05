import React from 'react'
import ModalItem from './ModalItem'

const ModalContainer = ({ Modal, handleClose, modalProps, handleUpload, handleDelete }) => {
  return (
    <div className='modal__container'>
      <div className='modal__background'
      onClick={ handleClose }> </div>

        <ModalItem Modal={Modal} handleClose={handleClose} modalProps={modalProps} handleUpload={handleUpload} handleDelete={handleDelete} />
    </div>
  )
}

export default ModalContainer