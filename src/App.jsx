import React, { useState } from 'react'
import { Header, ImageContainer, ModalContainer } from './components'

const App = () => {

  // Modal 
  const [showModal, setShowModal] = useState({
    show: false,
    modal: null,
    modalProps: {}
  });

  const handleOpen = (modal, props = {}) => {
    return () => {
      setShowModal({
        show: true,
        modal: modal,
        modalProps: props
      })
    }
  }

  const handleClose = () => {
    setShowModal({
      show: false,
      modal: null,
      modalProps: {}
    })
  }

  // Images
  

  return (
    <div className='main'>
      <Header openCreateModal={handleOpen} />
      <ImageContainer openDeleteModal={handleOpen} />
      {showModal.show && <ModalContainer Modal={showModal.modal} modalProps={showModal.modalProps} handleClose={handleClose} />}

    </div>
  )
}

export default App