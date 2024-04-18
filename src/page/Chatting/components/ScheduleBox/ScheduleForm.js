import React from "react";
import FormWrap from "../../../../common/FormWrap/FormWrap";
import DatePicker from "../../../../common/DatePicker/DatePicker";
import Dropdown from "../../../../common/Dropdown/Dropdown";
import LocationSelectBox from "../../../../common/LocationSelectBox/LocationSelectBox";

const ScheduleForm = () => {
  const timeData = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];
  const locationData = [
    { name: "가천대길병원 암센터", addr: "남동대로 가천대길병원 암센터" },
    { name: "가천대길병원", addr: "남동대로 774번길 가천대 길병원" },
    {
      name: "가천대 길병원 인공지능 암센터남동대로 가천대길병원 암센터",
      addr: "남동대로 가천대길병원 암센터남동대로 가천대길병원 암센터",
    },
  ];
  return (
    <FormWrap>
      <div className="formItem col">
        <h5>
          제목<em>*</em>
        </h5>
        <input
          type="text"
          placeholder="제목을 입력해 주세요"
          className="titleInput"
        />
      </div>

      <div className="formItem row">
        <div className="formItem col">
          <h5>
            시작<em>*</em>
          </h5>
          <DatePicker type="schedule" />
        </div>
        <div className="formItem col">
          <h5>
            시간<em>*</em>
          </h5>
          <Dropdown placeholder="08:00" optionData={timeData} size="md" />
        </div>
      </div>
      <div className="formItem row">
        <div className="formItem col">
          <h5>
            종료<em>*</em>
          </h5>
          <DatePicker type="schedule" />
        </div>
        <div className="formItem col">
          <h5>
            시간<em>*</em>
          </h5>
          <Dropdown placeholder="08:00" optionData={timeData} size="md" />
        </div>
      </div>
      <div className="formItem col">
        <h5>
          장소<em>*</em>
        </h5>
        <LocationSelectBox
          placeholder="장소를 선택해 주세요."
          optionData={locationData}
        />
      </div>
      <div className="formItem">
        <textarea placeholder="내용을 입력해주세요."></textarea>
      </div>
    </FormWrap>
  );
};

export default ScheduleForm;
