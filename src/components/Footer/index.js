import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className={style.footer}>
            <p className={style.text}>copyright © {date}</p>
        </div>
    )
}

export default Footer
