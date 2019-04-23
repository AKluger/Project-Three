import React from "react";
import "./style.css";

function LoginBtn(props) {
  return (
    <button className="btn btn-primary" {...props} tabIndex="0">
      Login
    </button>
  );
}

export default LoginBtn;
