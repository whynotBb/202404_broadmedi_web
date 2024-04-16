import {useState} from 'react';
import './Dropdown.style.css';
const Dropdown = () => {
    // 화면 확인을 위해 여닫기만 구현하였습니다.
    const [isOpen, setIsOpen] = useState(false);
    const dropdownHandler = () => {
        setIsOpen((current) => !current);
    };

    return (
        <div className={`dropdownBox ${isOpen ? 'on' : ''}`}>
            <p onClick={dropdownHandler}>결제 수단을 선택해주세요.</p>
            <ul className={`${isOpen ? 'on' : ''}`}>
                <li onClick={dropdownHandler}>option01</li>
                <li onClick={dropdownHandler}>option02</li>
                <li onClick={dropdownHandler}>option03</li>
            </ul>
        </div>
    );
};
export default Dropdown;
