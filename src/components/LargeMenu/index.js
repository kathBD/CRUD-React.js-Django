import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import css from './LargeMenu.module.css'
import logo from '../../assets/Logo/logo.png'


const Nav = () => {
    const { setName, setManager, name } = useContext(UserContext)

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        setName('')
        setManager('')
    }

    let menu;

    if (name === '') {
        menu = (
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-truncate link-light">
                        <span className="ms-1 d-none d-sm-inline">Ingresar</span>
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="nav-link text-truncate link-light">
                        <span className="ms-1 d-none d-sm-inline">Registrarse</span> </Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                <li className="nav-item">
                    <Link to="/home" className="nav-link text-truncate link-light">
                        <span className="ms-1 d-none d-sm-inline">Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link to='/employee' data-bs-toggle="collapse" className="nav-link text-truncate link-light">
                        <span className="ms-1 d-none d-sm-inline">Empleados</span> </Link>
                </li>
                <li>
                    <Link to="/products" className="nav-link text-truncate link-light">
                        <span className="ms-1 d-none d-sm-inline">Productos</span></Link>
                </li>
                <li>
                    <Link to="/" className="nav-link text-truncate link-light" onClick={logout}>
                        <span className="ms-1 d-none d-sm-inline">Salir</span></Link>
                </li>
            </ul>
        )
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${css.top}`}>
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand" to="/"><img src={logo} className={css.logo} alt='logo' /></Link>
                    {
                        name !== ''
                            ? <p className='me-auto align-self-center'>Hola {name}</p>
                            : null
                    }
                    <button className="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                        <span className={css.icon}><i class="fas fa-bars fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i></span>
                    </button>
                </div>
            </nav>
            <div className={`offcanvas offcanvas-start w-25 ${css.bg}`} tabIndex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
                <div className="offcanvas-header">
                    <h6 className="offcanvas-title d-none d-sm-block fs-4" id="offcanvas">Menu</h6>
                    <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body px-0">
                    {menu}
                </div>
            </div>
        </>
    );
};

export default Nav;