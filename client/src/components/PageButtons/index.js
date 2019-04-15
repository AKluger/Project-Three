import React from "react";

const Buttons = (props) => {
    return(
        <div>
        <button className="btn btn-secondary previous mr-3" type="secondary">Prev</button>
        <button className="btn btn-success next" type="success">Next</button>
        </div>
    )
}

export default Buttons