import React from 'react'
import Topcss from './TopNavbar.module.css'
import logo from '../assets/Logo/logo.png'
import * as FaIcons from 'react-icons/fa';



function TopNavbar () {


  return (
    <>
    
    <div className={Topcss.top}>   
      <div className={Topcss.wrapper}>
        <div className={Topcss.left}>
          <span className={Topcss.logo}>
            <img src={logo} width='90px' alt='logo' />
          </span>
        </div>
        <div className={Topcss.rigth}>
          <div className={Topcss.IconContainer}>  
          <FaIcons.FaUser color='#fff' size='1.5em'/>
          </div>
          
          <div className={Topcss.user}>
            <p>Administrador</p>
          
          </div>
          <div className={Topcss.icon}>
          <FaIcons.FaCaretDown color='#fff' size='1.5em'/>
          </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default TopNavbar
