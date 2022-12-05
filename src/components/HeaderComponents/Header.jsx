import React from 'react'
import FormHeader from './FormHeader'

const Header = ({ openCreateModal, columnsCount, handleColumn, handleSearch }) => {
  return (
    <div className='header__container'> 
    <div className='header__title'>
        <h2>UnPlash</h2>
        <p>Online Galery</p>
    </div>
        <FormHeader handleSearch={handleSearch} openCreateModal={openCreateModal} columnsCount={columnsCount} handleColumn={handleColumn} />
    </div>
  )
}

export default Header