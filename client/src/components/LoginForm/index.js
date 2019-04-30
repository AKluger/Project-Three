import React from "react";
import Loader from "react-loader-spinner";

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

export function ErrorBox(props) {
  const content = (!props.error) ? (
    <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
        <span className="sr-only" {...props}>Error:</span> <span className="msg"> </span>
    </div>
  ) : ( 
    <div id="alert" className="alert alert-danger" role="alert">
      <span className="sr-only" {...props}>Error:</span> {props.error} <span className="msg"> </span>
    </div>
  )
    return (
      <div>
        {content}
      </div>
    );
  }

  export function SuccessBox(props) {
    const content = (!props.success) ? (
      <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
          <span className="sr-only" {...props}>Error:</span> <span className="msg"> </span>
      </div>
    ) : ( 
      <div id="alert" className="pb-2" role="alert">
        {/* <span className="sr-only" {...props}>Error:</span> {props.error} <span className="msg"> </span> */}
        <Loader type="Oval" color="blue" height={40} width={40} />
      </div>
    )
      return (
        <div>
          {content}
        </div>
      );
    }

