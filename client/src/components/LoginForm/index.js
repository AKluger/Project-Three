// import React from 'react'
// import Nav from '../Nav'
// import Jumbo from '../tempJombo'
// import Library from '../tempLibrary'
// import "./style.css"


// class Login extends Component {
//     render(){
//         return (
//         <div classNameName="wrapper" >
//             <Nav />
//             {/* <Jumbo />
//             <div className="wrapperImg">    
//                 <Library />
//             </div> */}
    
//             <br/>
//             <div className="container">
//                 <div className="row">
//                 <div className="card border-danger col-md-6 col-md-offset-3 mx-auto">
                        
//                         <div className="card-header"><h2>Login</h2></div>
//                         <div className="card-body text-dark">
//                         <form className="login">
//                             <div className="form-group">
//                             <label for="exampleInputEmail1">Email address</label>
//                             <input type="email" className="form-control" id="email-input" placeholder="Email"/>
//                             </div>
//                             <div className="form-group">
//                             <label for="exampleInputPassword1">Password</label>
//                             <input type="password" className="form-control" id="password-input" placeholder="Password"/>
//                             </div>
//                             <button type="submit" className="btn btn-dark">Login</button>
//                         </form>
//                         <br />
//                         <p>Or sign up <a href="/signup">here</a></p>
//                         </div>
                
//                 </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function LoginBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">
      {props.children}
    </button>
  );
}
