import React, { useState } from "react";
import Profile from "../../../../common/Profile/Profile";

const ChattingDrawerProfile = ({ profileImg, nationImg, viewHandler }) => {
  // 신고차단 숨김 메뉴 여닫기
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuHandler = () => {
    setOpenMenu((current) => !current);
  };
  return (
    <div className="chattingDrawerWrap">
      <h3 className="title">
        <span className="btn_prev" onClick={() => viewHandler(0)}>
          이전
        </span>
        프로필
      </h3>
      <div className="btnHiddenMenu" onClick={openMenuHandler}></div>
      <ul className={`hiddenMenu ${openMenu && "on"}`}>
        <li onClick={openMenuHandler}>신고하기</li>
        <li onClick={openMenuHandler}>차단하기</li>
      </ul>
      <div className="drawerProfile">
        <div className="profileBox">
          <Profile profileImg={profileImg} nationImg={nationImg} type="md" />
          <h3 className="name">김승호</h3>
        </div>
      </div>
      <h4 className="subTitle">관심 진료 항목</h4>
      <div className="tagWrap">
        <ul>
          <li>암</li>
          <li>관상동맥 우회술 (CABG)</li>
          <li>알츠하이머</li>
          <li>소아심장과</li>
          <li>소아심장과</li>
          <li>골육종</li>
        </ul>
      </div>
      <h4 className="subTitle">국적</h4>
      <div className="tagWrap">
        <ul>
          <li>대한민국</li>
        </ul>
      </div>
    </div>
  );
};

export default ChattingDrawerProfile;
