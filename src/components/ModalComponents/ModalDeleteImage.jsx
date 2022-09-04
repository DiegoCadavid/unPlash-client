import React from 'react'


const ModalDeleteImage = ({ handleClose, deleteId = "No select"}) => {
    return (
        <div className='modal__body'>
            <h4>Are you sure? { deleteId }  </h4>
            <div className='modal__form'>
                <p> Password </p>
                <input type="password" placeholder='****************' />
                <div className='modal__form_buttons'>
                    <button className='modal__cancel' onClick={handleClose}> Cancel </button>
                    <button className='modal__delete'> Delete </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDeleteImage