import React from 'react'
import ModalItem from './ModalItem'

const ModalContainer = ({ Modal, handleClose, modalProps }) => {
  return (
    <div className='modal__container'>
      <div className='modal__background'
      onClick={ handleClose }> </div>

        <ModalItem Modal={Modal} handleClose={handleClose} modalProps={modalProps} />
    </div>
  )
}

export default ModalContainer