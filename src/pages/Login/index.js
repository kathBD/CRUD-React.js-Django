import React, { useContext, useState } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from '../../App';
import logo from '../../assets/Logo/logo.png'
import style from './Login.module.css'

const Login = () => {

    const { setName, setManager } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [loginAllowed, setLoginAllowed] = useState(true)

    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://mercatodo-app.herokuapp.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        if (response.ok) {

            const content = await response.json();
            setRedirect(true);
            setName(content.name);
            setManager(content.manager)
        } else {
            console.log(response)
            setLoginAllowed(false)
        }
    }

    if (redirect) {
        return <Redirect to="/home" />
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-sm-5 mx-auto">
                        <div className="card border-0 shadow rounded-2 my-3">
                            <div className="card-body p-4 p-sm-5">
                                <img src={logo} alt='logo' className={style.logo}/>
                                <form onSubmit={submit}>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" placeholder="Email address" required
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="floatingInput">Correo</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" placeholder="Password" required
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="floatingPassword">Contraseña</label>
                                    </div>
                                    <span className={style.alert} style={loginAllowed ? { display: 'none' } : { display: 'block' }}>Usuario ó Contraseña incorrecta</span>
                                    <div className="d-grid">
                                        <button className="" type="submit"><span>Ingresar</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login