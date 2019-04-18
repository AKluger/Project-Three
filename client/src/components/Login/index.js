import React from 'react'
import Nav from '../Nav'
// import Jumbotron from '../Jumbotron'
import Library from '../tempLibrary'
import "./style.css"


const Login = () => {
    return(
        <div classNameName="wrapper" >
            <Nav />
            {/* <Jumbo />
            <div className="wrapperImg">    
                <Library />
            </div> */}
    
            <br/>
            <div className="container">
                <div className="row">
                <div className="card border-danger col-md-6 col-md-offset-3 mx-auto">
                        
                        <div className="card-header"><h2>Login</h2></div>
                        <div className="card-body text-dark">
                        <form className="login">
                            <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-dark">Login</button>
                        </form>
                        <br />
                        <p>Or sign up <a href="/signup">here</a></p>
                        </div>
                
                </div>
                </div>
            </div>

        </div>
    )
}

export default Login;