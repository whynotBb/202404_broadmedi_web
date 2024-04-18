import React, { useState } from "react";
import "./LocationSelectBox.style.css";

const LocationSelectBox = ({ placeholder, optionData }) => {
  // 화면 확인을 위해 여닫기만 구현하였습니다.
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div className="location">
      <span className="pin">pin</span>
      <div className={`locationSelectBox ${isOpen ? "on" : ""}`}>
        <p onClick={dropdownHandler}>{placeholder}</p>
        <ul className={`${isOpen ? "on" : ""}`}>
          {optionData.map((data, index) => (
            <li key={index} onClick={dropdownHandler}>
              <h5>{data.name}</h5>
              <span>{data.addr}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationSelectBox;
