import React from 'react'

const ModalUploadImage = ({ handleClose }) => {
    return (
        <div className='modal__body'>
            <h4>Add a new photo</h4>
            <div className='modal__form'>
                <p> Label </p>
                <input type="text" placeholder='Suspendisse elit massa' />
                <p> Photo url</p>
                <input type="text" placeholder='https://res.cloudinary.com/dd4p0ksdu/image/upload/v1662316089/file_upload_app/wa5ks3zimsxejwpl4ha2.png' />
                <div className='modal__form_buttons'>
                    <button className='modal__cancel' onClick={handleClose}> Cancel </button>
                    <button className='modal__submit'> Submit </button>
                </div>
            </div>
        </div>
    )
}

export default ModalUploadImage