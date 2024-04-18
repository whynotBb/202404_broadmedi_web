import React, { useState } from "react";
import "./ChattingDrawer.style.css";
import profile02 from "../../../../images/profile_img_2.png";
import flag02 from "../../../../images/flag_1.svg";
import ChattingDrawerDefault from "./ChattingDrawerDefault";
import ChattingDrawerProfile from "./ChattingDrawerProfile";
import ChattingDrawerPost from "./ChattingDrawerPost";
import ScheduleBox from "../ScheduleBox/ScheduleBox";
import MedicalEstimateSheet from "./MedicalEstimateSheet";
import MedicalEstimateSheetAdd from "./MedicalEstimateSheetAdd";
import EstimateVisaAgency from "./EstimateVisaAgency";
import ChattingDrawerSharing from "./ChattingDrawerSharing";

const ChattingDrawer = () => {
  // 퍼블 화면 전환(확인)을 위한 페이지 이동 이벤트 입니다. 개발시 삭제 해 주세요.
  // viewMode : 0 - default / 1- profile / 2- post / 4- medicalTourismQuotation
  const [viewMode, setViewMode] = useState(0);
  const viewHandler = (mode) => {
    setViewMode(mode);
  };

  // 일정화면 띄우기
  const [isScheduleBox, setIsScheduleBox] = useState(false);
  const scheduleBoxHandler = () => {
    setIsScheduleBox((current) => !current);
  };
  return (
    <>
      {viewMode === 0 && (
        <ChattingDrawerDefault
          profileImg={profile02}
          nationImg={flag02}
          viewHandler={viewHandler}
          scheduleBoxHandler={scheduleBoxHandler}
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
      {viewMode === 4 && <MedicalEstimateSheet viewHandler={viewHandler} />}
      {viewMode === 5 && <MedicalEstimateSheetAdd viewHandler={viewHandler} />}
      {viewMode === 6 && <EstimateVisaAgency viewHandler={viewHandler} />}
      {viewMode === 7 && <ChattingDrawerSharing viewHandler={viewHandler} />}
      {/* </div> */}
      {isScheduleBox && <ScheduleBox close={scheduleBoxHandler} />}
    </>
  );
};

export default ChattingDrawer;
