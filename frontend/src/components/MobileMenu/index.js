import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import logo from '../../assets/Logo/logo.png'
import css from './MobileMenu.module.css'

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
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link  link-light">Ingresar</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link  link-light">Registrarse</Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/" className="nav-link  link-light">Inicio</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/products" className="nav-link  link-light">Productos</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/employee" className="nav-link link-light">Empleados</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/" className="nav-link link-light" onClick={logout}>Salir</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav className={`navbar navbar-expand-lg ${css.top}`}>
            <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="/"><img src={logo} className={css.logo} alt='logo' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`${css.icon} navbar-toggler-icon`}><i className="fas fa-bars fs-3"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;