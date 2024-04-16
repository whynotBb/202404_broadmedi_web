import React, { useState } from "react";
import "./ChattingRoom.style.css";
import Profile from "../../../../common/Profile/Profile";
import profile01 from "../../../../images/profile_img_1.png";
import flag01 from "../../../../images/flag_1.svg";
import ChattingSend from "./ChattingSend/ChattingSend";
import Modal from "../../../../common/Modal/Modal";
import HealthChart from "./HealthChart";

const ChattingRoom = () => {
    // 건강차트 모달 여닫기
    const [openModal, setOpenModal] = useState(false);
    const openModalHandler = () => {
        setOpenModal((current) => !current);
    };
    return (
        <div className="chattingRoomWrap">
            <div className="chattingRoomHeader">
                <Profile profileImg={profile01} nationImg={flag01} />
                <h3>김승호</h3>
                <ul className="shortcut">
                    <li className="call">call</li>
                    <li className="video">video</li>
                    <li className="more">more</li>
                </ul>
            </div>
            <div className="chattingRoomBody">
                <div className="dateTime">2023년 05월 09일</div>
                <div className="msgBox yourMsg">
                    <div className="profileBox">
                        <Profile profileImg={profile01} nationImg={flag01} />
                    </div>
                    <h4 className="name">김승호</h4>
                    <div className="msg">네 확인해 드리겠습니다</div>
                    <div className="global"></div>
                    <div className="info">
                        <div className="num">1</div>
                        <div className="time">14:53</div>
                    </div>
                </div>
                <div className="msgBox myMsg">
                    <div className="msg">네 확인해 드리겠습니다</div>
                    <div className="info">
                        <div className="num">1</div>
                        <div className="time">14:53</div>
                    </div>
                </div>
                <div className="msgBox myMsg">
                    <div className="noti">
                        <h5>알림</h5>
                        <div className="notiMsg">
                            "일정"이 작성되었습니다. "일정"이 작성되었습니다.
                        </div>
                        <div className="notiBtn">일정 확인하기</div>
                    </div>
                    <div className="info">
                        <div className="num">1</div>
                        <div className="time">14:53</div>
                    </div>
                </div>
                <div className="msgBox yourMsg">
                    <div className="noti">
                        <h5>알림</h5>
                        <div className="notiMsg">
                            "건강차트"가 작성되었습니다.
                        </div>
                        <div className="notiBtn" onClick={openModalHandler}>
                            건강차트 확인하기
                        </div>
                    </div>
                    <div className="info">
                        <div className="num">1</div>
                        <div className="time">14:53</div>
                    </div>
                </div>
                <div className="msgBox yourMsg">
                    <div className="profileBox">
                        <Profile profileImg={profile01} nationImg={flag01} />
                    </div>
                    <h4 className="name">김승호</h4>
                    <div className="msg">
                        네 확인해 드리겠습니다네 확인해 드리겠습니다네 확인해
                        드리겠습니다네 확인해 드리겠습니다네 확인해
                        드리겠습니다네 확인해 드리겠습니다
                    </div>
                    <div className="global"></div>
                    <div className="info">
                        <div className="num"></div>
                        <div className="time">14:53</div>
                    </div>
                </div>
            </div>
            <ChattingSend />
            <Modal
                className={openModal ? "open" : ""}
                openModalHandler={openModalHandler}
            >
                <h3 className="modalTitle">건강차트</h3>
                <HealthChart />
            </Modal>
        </div>
    );
};

export default ChattingRoom;
