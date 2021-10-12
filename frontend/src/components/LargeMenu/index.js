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
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                <li class="nav-item">
                    <Link to="/login" class="nav-link text-truncate link-light">
                        <span class="ms-1 d-none d-sm-inline">Login</span>
                    </Link>
                </li>
                <li>
                    <Link to="/register" data-bs-toggle="collapse" class="nav-link text-truncate link-light">
                        <span class="ms-1 d-none d-sm-inline">Register</span> </Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                <li class="nav-item">
                    <Link href="/" class="nav-link text-truncate link-light">
                        <span class="ms-1 d-none d-sm-inline">Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="#submenu1" data-bs-toggle="collapse" class="nav-link text-truncate link-light">
                        <span class="ms-1 d-none d-sm-inline">Empleados</span> </Link>
                </li>
                <li>
                    <Link href="/" class="nav-link text-truncate link-light">
                        <span class="ms-1 d-none d-sm-inline">Productos</span></Link>
                </li>
                <li>
                    <Link href="/" class="nav-link text-truncate link-light" onClick={logout}>
                        <span class="ms-1 d-none d-sm-inline">Salir</span></Link>
                </li>
            </ul>
        )
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${css.top}`}>
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="/"><img src={logo} className={css.logo} alt='logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       {/*  <span className="navbar-toggler-icon"></span> */}
                        <span className={`navbar-toggler-icon ${css.icon}`}><i class="fas fa-bars fs-3"></i></span>
                    </button>
                    <button class="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                        <span className={css.icon}><i class="fas fa-bars fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i></span>
                    </button>
                </div>
            </nav>
            <div class={`offcanvas offcanvas-start w-25 ${css.bg}`} tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
                <div class="offcanvas-header">
                    <h6 class="offcanvas-title d-none d-sm-block fs-4" id="offcanvas">Menu</h6>
                    <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body px-0">
                    {menu}
                </div>
            </div>
        </>
    );
};

export default Nav;