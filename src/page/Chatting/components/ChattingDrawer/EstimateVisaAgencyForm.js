import Dropdown from "../../../../common/Dropdown/Dropdown";
import FormWrap from "../../../../common/FormWrap/FormWrap";

export const EstimateVisaAgencyForm = () => {
    const sampleData = ["단기체류(C-3-3)", "치료요양(G-1-10)", "기타"];
    return (
        <FormWrap>
            <h4 className="formTitle">
                <span>발급대상</span>
                <i>
                    <em>*</em>필수입력사항
                </i>
            </h4>
            <div className="formItem">
                <h5>
                    고객 이름<em>*</em>
                </h5>
                <input type="text" placeholder="이름을 입력해주세요." />
            </div>
            <div className="formItem">
                <h5>
                    치료일(수술)<em>*</em>
                </h5>
                <input type="text" placeholder="YYYY / MM / DD" />
            </div>
            <div className="formItem">
                <h5>
                    결제수단<em>*</em>
                </h5>
                <Dropdown placeholder="결제 수단을 선택해주세요." />
            </div>
            <div className="formItem">
                <h5>
                    국적<em>*</em>
                </h5>
                <Dropdown placeholder="국적을 선택해 주세요." />
            </div>
            <div className="formItem">
                <div className="addMorePeople">인원 추가하기</div>
            </div>
            <h4 className="formTitle">
                <span>발급대상</span>
                <i>
                    <em>*</em>필수입력사항
                </i>
            </h4>
            <div className="formItem">
                <h5>
                    고객 이름<em>*</em>
                </h5>
                <input type="text" placeholder="이름을 입력해주세요." />
            </div>
            <div className="formItem">
                <h5>
                    치료일(수술)<em>*</em>
                </h5>
                <input type="text" placeholder="YYYY / MM / DD" />
            </div>
            <div className="formItem">
                <h5>
                    결제수단<em>*</em>
                </h5>
                <Dropdown placeholder="결제 수단을 선택해주세요." />
            </div>
            <div className="formItem">
                <h5>
                    국적<em>*</em>
                </h5>
                <Dropdown placeholder="국적을 선택해 주세요." />
            </div>
            <div className="formItem">
                <div className="addMorePeople">인원 추가하기</div>
            </div>
            <h4 className="formTitle">
                <span>견적정보</span>
            </h4>
            <div className="formItem">
                <h5>
                    비자 종류<em>*</em>
                </h5>
                <Dropdown placeholder="비자타입" optionData={sampleData} />
            </div>
            <div className="amountBox">
                <div className="formItem">
                    <h5>비자 발급 수수료 (KRW)</h5>
                    <input className="amountInput" type="text" value="62,000" />
                </div>
                <hr className="dashed" />
                <div className="formItem amountItem">
                    <h4>총 계약금</h4>
                    <p>
                        62,000 <small>(KRW)</small>
                    </p>
                </div>
            </div>
            <div className="shadowBox">
                <div>
                    [(주) 브로드메디]에서 발행한 비자발급 대행 견적 및 계약서는
                    고객이 의료관광을 위해 원활하게 입국할 수 있도록 지원하기
                    위해 작성되었으며, 국가에 따라 제출해야 하는 서류와 발급
                    일정이 다를 수 있으므로 담당 코디네이터와 상세한 상담 후
                    진행하시기 바랍니다.
                </div>
                <div>
                    견적서의 범위는 고객과 담당 코디네이터 간 협의를 통해
                    결정되므로, 고객마다 가격이 다를 수 있습니다. 계약 체결
                    전에는 반드시 관련 법률과 규정을 확인하시고, 궁금한 사항이나
                    문제가 발생하면 즉시 담당 코디네이터에게 연락하여 해결하시길
                    권장 드립니다.
                </div>
            </div>
        </FormWrap>
    );
};
