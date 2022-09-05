import React from 'react'
import { ModalUploadImage } from '../index'
import { useForm } from 'react-hook-form';

const FormHeader = ({ openCreateModal, columnsCount, handleColumn, handleSearch }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        handleSearch(data.searchInput);
    }

    return (
        <div className='header__form'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="text" placeholder='Search by name' { ...register('searchInput')} />
            </form>
            <div className='header__buttons'>
                {/* Add columns */}
                <div>
                    <p>Columns: {columnsCount} </p>
                    <div>
                        <button onClick={handleColumn(-1)}> - </button>
                        <button onClick={handleColumn(1)}> + </button>
                    </div>
                </div>

                {/*Button upload  */}
                <button onClick={openCreateModal(ModalUploadImage)}> Add a photo </button>
            </div>
        </div>
    )
}

export default FormHeader