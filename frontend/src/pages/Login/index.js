import React, { useContext, useState } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from '../../App';
import logo from '../../assets/Logo/logo.png'


const Login = () => {

    const { setName, setManager } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        setRedirect(true);
        setName(content.name);
        setManager(content.manager)
    }

    if (redirect) {
        return <Redirect to="/" />;
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
                                        <input type="email" className="form-control" placeholder="Email address" required
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <label for="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" placeholder="Password" required
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                        <label className="form-check-label" for="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                            in</button>
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

export default Login;