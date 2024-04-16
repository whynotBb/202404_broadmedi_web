import React from "react";

const ChattingDrawerSharing = ({ viewHandler }) => {
    return (
        <>
            <h3 className="title">
                <span className="btn_prev" onClick={() => viewHandler(0)}>
                    이전
                </span>
                공유 서류함
            </h3>
            <h4 className="subTitle">의료관광 견적서</h4>
            {/* 견적서가 없는 경우 */}
            <div className="estimateWrap noFile">
                <p className="fileName">견적서가 업로드 되지 않았습니다.</p>
            </div>
        </>
    );
};

export default ChattingDrawerSharing;
