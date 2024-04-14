import React, { useState } from "react";
import "./ChattingDrawer.style.css";
import profile02 from "../../../../images/profile_img_2.png";
import flag02 from "../../../../images/flag_1.svg";
import ChattingDrawerDefault from "./ChattingDrawerDefault";
import ChattingDrawerProfile from "./ChattingDrawerProfile";
import ChattingDrawerPost from "./ChattingDrawerPost";

const ChattingDrawer = () => {
    // 퍼블 화면 전환(확인)을 위한 페이지 이동 이벤트 입니다. 개발시 삭제 해 주세요.
    // viewMode : 0 - default / 1- profile / 2- post
    const [viewMode, setViewMode] = useState(0);
    const viewHandler = (mode) => {
        setViewMode(mode);
    };
    return (
        <div className="chattingDrawerWrap">
            {viewMode === 0 && (
                <ChattingDrawerDefault
                    profileImg={profile02}
                    nationImg={flag02}
                    viewHandler={viewHandler}
                />
            )}

            {viewMode === 1 && (
                <ChattingDrawerProfile
                    profileImg={profile02}
                    nationImg={flag02}
                    viewHandler={viewHandler}
                />
            )}

            {viewMode === 2 && <ChattingDrawerPost viewHandler={viewHandler} />}
        </div>
    );
};

export default ChattingDrawer;
