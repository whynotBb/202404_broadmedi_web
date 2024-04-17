import React from "react";
import "./Snb.style.css";

const Snb = () => {
    return (
        <div className="subWrapper">
            <h1>Logo</h1>
            <h2>관리자</h2>
            <nav>
                <ul>
                    <li className="home">home</li>
                    {/* on 에서 활성화 */}
                    <li className="chatting on">
                        <span>채팅</span>
                    </li>
                    <li className="hospital">hospital</li>
                    <li className="chart">chart</li>
                    <li className="mypage">mypage</li>
                </ul>
            </nav>
            <div className="userSetting">userSetting</div>
        </div>
    );
};

export default Snb;
