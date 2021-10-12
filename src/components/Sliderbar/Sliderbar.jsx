import React from 'react'
import SliderCSS from './Sliderbar.module.css'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



export const Sliderbar = () => {
    return (
        <div className={SliderCSS.slider}>
            <ul>
          
                <li>
                <Link to ="/"> <AiIcons.AiFillHome color="#D74315" size='2em' />  Home  </Link>
            
                 
                </li>
                <li>
                    <Link to ="/Employees"><IoIcons.IoMdPeople color="#D74315" size='2em' padding='2px' />  Empleados </Link>
                </li>
                <li>
                    <Link to ="/Products"><FaIcons.FaCartPlus color="#D74315" size='2em'/>  Productos</Link>
                </li>
                <li>
                    <Link to ="/Login"><FaIcons.FaPowerOff color="#D74315" size='2em'/>  Entrar</Link>
                </li>
               
            </ul>
        
       
        </div>
           
      
       
    )
}

export default Sliderbar
