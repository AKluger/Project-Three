import React from "react";



export const withErrorHandling = WrappedComponent => ({ showError, children }) => {
    return (
      <WrappedComponent>
        {showError && <div className="error-message">Invalid Credentials.</div>}
        {children}
      </WrappedComponent>
    );
  };
  
  // to wrap any page that could trigger an error
  export const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)
  