import React from "react";
import "./Toggle.style.css";

const Toggle = ({ id }) => {
    return (
        <div className="toggleWrap">
            <input type="checkbox" id={id} />
            <label htmlFor={id}></label>
        </div>
    );
};

export default Toggle;
