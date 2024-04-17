import Button from "../Button/Button";
import "./Alert.style.css";

const Alert = ({ className, children, openAlertHandler, size }) => {
    return (
        <div className={`alertWrap ${className} ${size}`}>
            <div className="alertContents">
                <div className="modalHeader">
                    <button className="btnClose" onClick={openAlertHandler}>
                        close
                    </button>
                </div>
                <div className="txt">{children}</div>
                <div className="alertBottom">
                    <Button type="primary lg" fn={openAlertHandler}>
                        확인
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default Alert;
