import React from 'react'
import logo from '../assets/Logo/logo.png'

const Login = () => {
    return (
        <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-5 col-sm-5 mx-auto">
        <div className="card border-0 shadow rounded-2 my-3">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center"><img src={logo} width='60px' alt='logo'/></h5>
            <form>
              <div className="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
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
     
    )
}

export default Login



