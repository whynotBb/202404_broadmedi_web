import React from 'react';
import './Modal.style.css';

// size = 기본 / md :433px 달력의 모달
const Modal = ({className, openModalHandler, children, size, type}) => {
    return (
        <div className={`modalWrap ${className} ${type ? type : ''}`}>
            <div className={`modalContents ${size ? size : ''}`}>
                <div className='modalHeader'>
                    <button className='btnClose' onClick={openModalHandler}>
                        close
                    </button>
                </div>
                <div className='modalBody'>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
