import React, { useContext, useEffect, useState } from 'react';
import LargeMenu from '../LargeMenu/'
import MobileMenu from '../MobileMenu/'
import { UserContext } from '../../App';

const Nav = () => {
    const { setName, setManager } = useContext(UserContext)
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        setName('')
        setManager('')
    }

    return (
        <>
            {
            width > 580 ? <LargeMenu logout={logout} /> : <MobileMenu logout={logout} />
            }
        </>
    );
};

export default Nav;