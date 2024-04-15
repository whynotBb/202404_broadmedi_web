import React from "react";
import Button from "../../../../common/Button/Button";

const MedicalEstimateSheet = ({ viewHandler }) => {
    return (
        <>
            <h3 className="title">
                <span className="btn_prev" onClick={() => viewHandler(0)}>
                    이전
                </span>
                의료관광 견적서
            </h3>
            <h4 className="subTitle">의료관광 견적서</h4>
            <div className="estimateWrap">
                <p className="fileName">견적서가 업로드 되지 않았습니다.</p>
            </div>
            <div className="estimateWrap">
                <p className="fileName">의료관광견적서_20231215</p>
                <div className="dateTime">2023년 09월 30일 14:00</div>
            </div>
            <div className="drawerBtnWrap">
                <Button type="upload">업로드</Button>
            </div>
        </>
    );
};

export default MedicalEstimateSheet;
