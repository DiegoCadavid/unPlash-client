import React from 'react'
import logoSvg from '../../assets/my_unsplash_logo.svg'
import FormHeader from './FormHeader'

const Header = ({ openCreateModal, columnsCount, handleColumn, handleSearch }) => {
  return (
    <div className='header__container'> 
        <img src={logoSvg} alt="logo" />
        <FormHeader handleSearch={handleSearch} openCreateModal={openCreateModal} columnsCount={columnsCount} handleColumn={handleColumn} />
    </div>
  )
}

export default Header