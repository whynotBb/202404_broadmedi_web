import React, { useState } from "react";
import "./ChattingList.style.css";
import SearchBox from "../../../../common/SearchBox/SearchBox";

import { sampleData } from "./sampleData";
import Profile from "../../../../common/Profile/Profile";

// 개발 적용 시 이미지 파일은 절대경로로 img 태그 src에 직접 주소 넣어주시면 됩니다.

const ChattingList = () => {
  // 클릭 이벤트를 위해 작성된 부분이오니, 개발시 삭제 바랍니다.
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div className="chattingListWrap">
      <h3 className="title">채팅 목록</h3>
      <SearchBox />
      <div className="chattingListBox">
        {sampleData.map((data, index) => (
          <div
            className={`item ${selectedItem === index ? "on" : ""}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="profileBox">
              <Profile
                profileImg={data.profileImg}
                nationImg={data.nationImg}
              />
            </div>
            <h4>{data.name}</h4>
            <p>{data.message}</p>
            {data.messageNum > 0 && (
              <div className="messageNum">
                {data.messageNum > 99 ? "99+" : data.messageNum}
              </div>
            )}

            <div className="time">{data.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChattingList;
