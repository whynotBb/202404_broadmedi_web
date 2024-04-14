import React from "react";
import "./Button.style.css";

const Button = ({ size, type, children, fn }) => {
    // size : sm/-/md/lg 순서 (세로사이즈  :34/40/42/50)
    // type : primary, secondary, upload
    return (
        <button className={`btn ${size} ${type}`} onClick={fn}>
            {children}
        </button>
    );
};

export default Button;
