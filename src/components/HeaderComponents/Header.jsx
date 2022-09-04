import React from 'react'
import logoSvg from '../../assets/my_unsplash_logo.svg'
import FormHeader from './FormHeader'

const Header = ({ openCreateModal }) => {
  return (
    <div className='header__container'> 
        <img src={logoSvg} alt="logo" />
        <FormHeader openCreateModal={openCreateModal} />
    </div>
  )
}

export default Header