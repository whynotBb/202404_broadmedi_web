import React from "react";
import "./ChattingSend.style.css";

const ChattingSend = () => {
    return (
        <div className="chattingSendWrap">
            <div className="chattingInput">
                <input type="text" placeholder="내용을 입력해 주세요." />
                <button>plus</button>
            </div>
            <button className="chattingSend">send</button>
        </div>
    );
};

export default ChattingSend;
