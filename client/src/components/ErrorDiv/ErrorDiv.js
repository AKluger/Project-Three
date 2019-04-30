import React from "react";
import { AutoComplete } from "antd";




export const withErrorHandling = WrappedComponent => ({ showError, children }) => {
  
  const style = {
    backgroundColor: "white",
    marginRight: "20px"
  }
  
  return (
      <WrappedComponent>
        {showError && <div style={style} className="error-message">Invalid Credentials.</div>}
        {children}
      </WrappedComponent>
    );
  };
  
  // to wrap any page that could trigger an error
  export const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)
  