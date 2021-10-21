import React from 'react'
import { Link } from 'react-router-dom'
import style from './HomeStart.module.css'
import home from '../../assets/icons/home-image.png'

const HomeStart = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.section}>
          <h1 className={style.title}>Bienvenido a Mercatodo</h1>
          <p>Plataforma administrativa</p>
          <div className="btns">
            <Link to='/login' className={style.link}>Ingresar</Link>
            <Link to='/register' className={style.link}>Ingresar</Link>
          </div>
        </div>
        <div className={style.section}>
          <img src={home} alt="home logo" />
        </div>
      </div>
    </>
  )
}

export default HomeStart
