import React from "react";
import "./Modal.style.css";

const Modal = ({ className, openModalHandler, children }) => {
    return (
        <div className={`modalWrap ${className}`}>
            <div className="modalContents">
                <div className="modalHeader">
                    <button className="btnClose" onClick={openModalHandler}>
                        close
                    </button>
                </div>
                <div className="modalBody">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
