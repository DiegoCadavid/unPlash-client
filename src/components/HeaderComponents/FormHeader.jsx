import React from 'react'
import { ModalUploadImage } from '../index'

const FormHeader = ({ openCreateModal }) => {
    return (
        <div className='header__form'>
            <input type="text" placeholder='Search by name' />
            <button onClick={openCreateModal( ModalUploadImage )}> Add a photo </button>
        </div>
    )
}

export default FormHeader