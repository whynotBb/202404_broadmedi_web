import React from "react";
import Snb from "./components/Snb/Snb";
import "./ChattingPage.style.css";
import ChattingRoom from "./components/ChattingRoom/ChattingRoom";
import ChattingList from "./components/ChattingList/ChattingList";
import ChattingDrawer from "./components/ChattingDrawer/ChattingDrawer";

// 채팅 페이지
const ChattingPage = () => {
    return (
        <div className="bodyWrapper">
            <Snb />
            <ChattingList />
            <ChattingRoom />
            <ChattingDrawer />
        </div>
    );
};

export default ChattingPage;
