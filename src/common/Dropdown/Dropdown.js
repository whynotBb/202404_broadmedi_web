import { useState } from "react";
import "./Dropdown.style.css";
const Dropdown = ({ placeholder, optionData, size }) => {
  // 화면 확인을 위해 여닫기만 구현하였습니다.
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className={`dropdownBox ${isOpen ? "on" : ""} ${size}`}>
      <p onClick={dropdownHandler}>{placeholder}</p>
      <ul className={`${isOpen ? "on" : ""}`}>
        {optionData ? (
          optionData.map((option, index) => (
            <li onClick={dropdownHandler} key={index}>
              {option}
            </li>
          ))
        ) : (
          <>
            <li onClick={dropdownHandler}>option01</li>
            <li onClick={dropdownHandler}>option02</li>
            <li onClick={dropdownHandler}>option03</li>
          </>
        )}
      </ul>
    </div>
  );
};
export default Dropdown;
