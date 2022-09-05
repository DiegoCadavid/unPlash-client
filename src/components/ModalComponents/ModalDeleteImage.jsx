import React, { useEffect, useRef } from 'react'

import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

const ModalDeleteImage = ({ handleClose, handleDelete, deleteId = "No select" }) => {

    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        if(data.password.trim() != deleteId){
            enqueueSnackbar(`Invalid password`, { variant: 'error' });
            return; 
        }

        axios.delete('https://unsplash-server-production.up.railway.app/images', {
            data: { id : deleteId }
        }).then(res => {
            enqueueSnackbar(`${res.data.id} Delete!`, { variant: 'success' });
            handleDelete(res.data.id);
            handleClose(true);
        }).catch(err => {
            console.log(err.response.data);
            handleClose(true);
            enqueueSnackbar(`ERROR ${err.response.data.code} | ${err.response.data.msg}`, { variant: 'error' });
        });

    }

    return (
        <div className='modal__body'>
            <h4>Are you sure? <span className='modal__copy'> {deleteId} </span> </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='modal__form'>
                    <p> Password </p>
                    <input type="password" placeholder='****************' {...register('password')} />
                    <div className='modal__form_buttons'>
                        <button className='modal__cancel' onClick={handleClose}> Cancel </button>
                        <button className='modal__delete' autoFocus> Delete </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ModalDeleteImage