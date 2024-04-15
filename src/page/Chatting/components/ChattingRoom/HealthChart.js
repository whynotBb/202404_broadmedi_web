import React, { useState } from "react";
import FormWrap from "../../../../common/FormWrap/FormWrap";

const HealthChart = () => {
    // 더보기 이벤트 용 - 첫번째 항목에만 적용 해 두었습니다.
    const [isOpen, setIsOpen] = useState(false);
    const moreOpenHandler = () => {
        setIsOpen((current) => !current);
    };
    return (
        <FormWrap>
            <h4 className="formTitle"> </h4>
            <div className="formItem">
                <h5>고객 이름</h5>
                <input type="text" value="홍길동" readOnly />
            </div>
            <div className="formItem">
                <h5>휴대전화번호</h5>
                <input type="text" value="+821012341234" readOnly />
            </div>
            <div className="formItem">
                <h5>이메일</h5>
                <input type="text" value="asdf1234@gmail.com" readOnly />
            </div>
            <div className="formItem">
                <h5>생년월일</h5>
                <input type="text" value="1980-12-18" readOnly />
            </div>
            <div className="formItem">
                <h5>성별</h5>
                <input type="text" value="여" readOnly />
            </div>
            <div className="formItem">
                <h5>몸무게(kg)</h5>
                <input type="text" value="80" readOnly />
            </div>
            <div className="formItem">
                <h5>키(cm)</h5>
                <input type="text" value="180" readOnly />
            </div>
            <div className="formItem">
                <h5>여권번호</h5>
                <input type="text" value="M18865960" readOnly />
            </div>
            <div className="formItem">
                <h5>국적</h5>
                <input type="text" value="대한민국" readOnly />
            </div>
            <div className="formItem">
                <h5>거주지</h5>
                <input type="text" value="인천" readOnly />
            </div>
            <h4 className="formTitle"> </h4>
            <div className="textBoxItem">
                <p>초기 진단명</p>
                <div className={`textBox ${isOpen && "open"}`}>
                    <div className="inner">
                        이준승 부산시 행정부시장은 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시, 부산을 위해
                        의료관광 전문가들과 함께 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시 부산을 위해
                        의료관광 전문가들과 함께 도시
                    </div>
                    <span className="more" onClick={moreOpenHandler}>
                        {isOpen ? "접기" : "더보기"}
                    </span>
                </div>
            </div>
            <div className="textBoxItem">
                <p>과거 수술 이력과 병명</p>
                <div className="textBox">
                    <div className="inner">
                        이준승 부산시 행정부시장은 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시, 부산을 위해
                        의료관광 전문가들과 함께 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시 부산을 위해
                        의료관광 전문가들과 함께 도시
                    </div>
                    <span className="more">더보기</span>
                </div>
            </div>
            <div className="textBoxItem">
                <p>처음 진단 받은 시기는 언제인가요?</p>
                <div className="textBox">
                    <div className="inner">2023-06-12</div>
                </div>
            </div>
            <div className="textBoxItem">
                <p>현재 당신의 징후와 증상을 알려주세요</p>
                <div className="textBox">
                    <div className="inner">
                        이준승 부산시 행정부시장은 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시, 부산을 위해
                        의료관광 전문가들과 함께 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시 부산을 위해
                        의료관광 전문가들과 함께 도시
                    </div>
                    <span className="more">더보기</span>
                </div>
            </div>
            <div className="textBoxItem">
                <p>현재 상태를 알려주세요</p>
                <div className="textBox">
                    <div className="inner">
                        이준승 부산시 행정부시장은 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시, 부산을 위해
                        의료관광 전문가들과 함께 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시 부산을 위해
                        의료관광 전문가들과 함께 도시
                    </div>
                    <span className="more">더보기</span>
                </div>
            </div>
            <div className="textBoxItem">
                <p>진단서가 있다면 업로드 해주세요.</p>
                <div className="textBox">
                    <div className="inner">
                        <span className="link">
                            서울미래병원_홍명준_진단서.pdf
                        </span>
                    </div>
                </div>
            </div>
            <div className="textBoxItem">
                <p>선호하는 병원을 알려주세요.</p>
                <div className="location">
                    <p className="name">서울 미래 병원</p>
                    <p className="address">인천 남동구 남동대로774번길 21</p>
                </div>
            </div>
            <div className="textBoxItem">
                <p>
                    귀하의 현재 의학적 우려 사항과 귀하가 찾고 있는 특정 치료
                    또는 절차에 대한 자세한 설명 을 해주세요.
                </p>
                <div className="textBox">
                    <div className="inner">
                        이준승 부산시 행정부시장은 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시, 부산을 위해
                        의료관광 전문가들과 함께 "치료받고 치유하기 좋은 도시,
                        부산을 위해 의료관광 전문가들과 함께 도시 부산을 위해
                        의료관광 전문가들과 함께 도시
                    </div>
                    <span className="more">더보기</span>
                </div>
            </div>
            <div className="textBoxItem">
                <p>특정 약이나 음식에 알레르기가 있나요?</p>
                <div className="textBox">
                    <div className="inner">아니오</div>
                </div>
            </div>
            <div className="textBoxItem">
                <p>마취에 문제가 있나요?</p>
                <div className="textBox">
                    <div className="inner">아니오</div>
                </div>
            </div>
            <div className="textBoxItem">
                <p>일주일에 한 갑 이상을 흡연하시나요?</p>
                <div className="textBox">
                    <div className="inner">아니오</div>
                </div>
            </div>
            <div className="textBoxItem">
                <p>일주일에 3일 이상 음주를 하시나요?</p>
                <div className="textBox">
                    <div className="inner">아니오</div>
                </div>
            </div>
            <div className="textBoxItem">
                <p>피임약이나 호르몬 관련 약을 복용하고 있나요?</p>
                <div className="textBox">
                    <div className="inner">아니오</div>
                </div>
            </div>
            <div className="textBoxItem">
                <p>임신이나 모유 수유 중인가요?</p>
                <div className="textBox">
                    <div className="inner">아니오</div>
                </div>
            </div>
            <h6>나의 최근 건강정보</h6>
            <div className="infoItem">
                <h5>포도당</h5>
                <span>음성</span>
            </div>
            <div className="infoItem">
                <h5>단백질</h5>
                <span>음성</span>
            </div>
            <div className="infoItem">
                <h5>pH</h5>
                <span>6.5</span>
            </div>
            <div className="infoItem">
                <h5>pH</h5>
                <span>음성</span>
            </div>
            <div className="infoItem">
                <h5>유로빌리노겐</h5>
                <span className="noData">결과없음</span>
            </div>
            <div className="infoItem">
                <h5>비타민C</h5>
                <span className="noData">결과없음</span>
            </div>
            <div className="infoItem">
                <h5>빌리루빈</h5>
                <span className="noData">결과없음</span>
            </div>
            <div className="infoItem">
                <h5>케톤</h5>
                <span className="noData">결과없음</span>
            </div>
            <div className="infoItem">
                <h5>비중</h5>
                <span className="noData">결과없음</span>
            </div>
            <div className="infoItem">
                <h5>마이크로알부민</h5>
                <span className="noData">결과없음</span>
            </div>
            <div className="infoItem">
                <h5>아질산염</h5>
                <span className="noData">결과없음</span>
            </div>
            <div className="infoItem">
                <h5>백혈구</h5>
                <span className="noData">결과없음</span>
            </div>
            <div className="infoItem">
                <h5>크레아틴</h5>
                <span className="noData">결과없음</span>
            </div>
        </FormWrap>
    );
};

export default HealthChart;
