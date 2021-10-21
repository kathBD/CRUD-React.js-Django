import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../../assets/Logo/logo.png'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [check, setCheck] = useState(false)
    const [manager, setManager] = useState(0);


    const handleOnChange = () => {
        setCheck(!check);
        let isManager = Number(!check)
        setManager(isManager)
    };

    const submit = async (e) => {
        e.preventDefault();

        await fetch('https://mercatodo-app.herokuapp.com/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
                manager
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-sm-5 mx-auto">
                        <div className="card border-0 shadow rounded-2 my-3">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center"><img src={logo} width='60px' alt='logo' /></h5>
                                <form onSubmit={submit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" placeholder="Nombre" required
                                            onChange={e => setName(e.target.value)}
                                        />
                                        <label htmlFor="floatingInput">Nombre</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" placeholder="Email" required
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" placeholder="Contraseña" required autoComplete="off"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="floatingPassword">Contraseña</label>
                                    </div>

                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" checked={check}
                                            onChange={handleOnChange} />
                                        <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                            Eres administrador?
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Registrarse</button>
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

export default Register;