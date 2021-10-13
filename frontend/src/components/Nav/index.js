import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import css from './Nav.module.css'
import LargeMenu from '../LargeMenu/'
import MobileMenu from '../MobileMenu/'

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

    /*     let menu;
    
        if (name === '') {
            menu = (
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                    <li class="nav-item">
                        <Link to="/login" class="nav-link text-truncate">
                            <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Login</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" data-bs-toggle="collapse" class="nav-link text-truncate">
                            <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">Register</span> </Link>
                    </li>
                </ul>
            )
        } else {
            menu = (
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                    <li class="nav-item">
                        <Link href="/" class="nav-link text-truncate">
                            <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#submenu1" data-bs-toggle="collapse" class="nav-link text-truncate">
                            <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">Empleados</span> </Link>
                    </li>
                    <li>
                        <Link href="/" class="nav-link text-truncate">
                            <i class="fs-5 bi-table"></i><span class="ms-1 d-none d-sm-inline">Productos</span></Link>
                    </li>
                    <li>
                        <Link href="/" class="nav-link text-truncate">
                            <i class="fs-5 bi-grid"></i><span class="ms-1 d-none d-sm-inline">Salir</span></Link>
                    </li>
                </ul>
            )
        } */

    return (
        <>
            <LargeMenu />
            {/* <MobileMenu /> */}
        </>
    );
};

export default Nav;