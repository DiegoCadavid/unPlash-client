import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';


const ModalUploadImage = ({ handleClose, handleUpload }) => {

    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        axios.post('https://unsplash-server-production.up.railway.app/images', data).then(res => {
            enqueueSnackbar(`${res.data.label} uploaded!`, { variant: 'success' });
            handleUpload(res.data)
            handleClose(true);
        }).catch(err => {
            console.log(err.response.data);
            handleClose(true);
            enqueueSnackbar(`ERROR ${err.response.data.code} | ${err.response.data.msg}`, { variant: 'error' });
        });

    }

    return (
        <div className='modal__body'>
            <h4>Add a new photo</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='modal__form'>
                    <p> Label </p>
                    <input type="text" placeholder='Suspendisse elit massa' {...register('label')} />
                    <p> Photo url</p>
                    <input type="text" placeholder='https://res.cloudinary.com/dd4p0ksdu/image/upload/v1662316089/file_upload_app/wa5ks3zimsxejwpl4ha2.png'
                        {...register('url')} />
                    <div className='modal__form_buttons'>
                        <button className='modal__cancel' onClick={handleClose}> Cancel </button>
                        <button className='modal__submit' autoFocus> Submit </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ModalUploadImage