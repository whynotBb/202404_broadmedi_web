import {useState} from 'react';
import AccordionBox from '../../../../common/AccordionBox/AccordionBox';
import Dropdown from '../../../../common/Dropdown/Dropdown';
import FormWrap from '../../../../common/FormWrap/FormWrap';

export const MedicalEstimateSheetForm = () => {
    // 아코디언 여닫기
    const [accoOpen1, setAccoOepn1] = useState(false);
    const accoOpenHandler = () => {
        setAccoOepn1((current) => !current);
    };
    const [accoOpen2, setAccoOepn2] = useState(false);
    const accoOpenHandler2 = () => {
        setAccoOepn2((current) => !current);
    };
    return (
        <FormWrap>
            <h4 className='formTitle'>
                <span></span>
                <i>
                    <em>*</em>필수입력사항
                </i>
            </h4>
            <div className='formItem'>
                <h5>
                    고객 이름<em>*</em>
                </h5>
                <input type='text' value='홍길동' readOnly />
            </div>
            <div className='formItem'>
                <h5>
                    고객 메일<em>*</em>
                </h5>
                <input type='text' value='Gildong1234@gmail.com' readOnly />
            </div>
            <div className='formItem'>
                <h5>
                    담당 코디네이터 이름<em>*</em>
                </h5>
                <input type='text' value='길순' readOnly />
            </div>
            <div className='formItem'>
                <h5>
                    담당 코디네이터 메일<em>*</em>
                </h5>
                <input type='text' value='Gilsoon1234@gmail.com' readOnly />
            </div>
            <div className='formItem'>
                <h5>
                    치료 작업명<em>*</em>
                </h5>
                <input type='text' placeholder='작업을 입력해주세요' />
            </div>
            <div className='formItem'>
                <h5>
                    치료일(수술)<em>*</em>
                </h5>
                <input type='text' placeholder='YYYY / MM / DD' />
            </div>
            <div className='formItem'>
                <h5>
                    병원/진료소<em>*</em>
                </h5>
                <input type='text' placeholder='주소를 입력해주세요.' />
            </div>
            <div className='formItem'>
                <h5>
                    결제수단<em>*</em>
                </h5>
                <Dropdown />
            </div>
            <div className='formItem'>
                <h5>
                    스케쥴<em>*</em>
                </h5>
                <input type='text' value='YYYY / MM / DD ~ YYYY / MM / DD' readOnly />
            </div>
            <AccordionBox fn={accoOpenHandler} accoOpen={accoOpen1}>
                <h4 className='accordionTitle'>1일차</h4>
                <div className='accordionBody'>
                    <ul className='contentBorderBox'>
                        <li>제목</li>
                        <li>장소 위치명</li>
                        <li>2023.00.00 (14:00) ~ 2023.00.00 (18:00)</li>
                        <li>상세 내용 메모 내용 출력</li>
                    </ul>
                    <ul className='contentBorderBox'>
                        <li>제목</li>
                        <li>장소 위치명</li>
                        <li>2023.00.00 (14:00) ~ 2023.00.00 (18:00)</li>
                        <li>상세 내용 메모 내용 출력</li>
                    </ul>
                </div>
            </AccordionBox>
            <AccordionBox fn={accoOpenHandler2} accoOpen={accoOpen2}>
                <h4 className='accordionTitle'>2일차</h4>
                <div className='accordionBody'>
                    <ul className='contentBorderBox'>
                        <li>제목</li>
                        <li>장소 위치명</li>
                        <li>2023.00.00 (14:00) ~ 2023.00.00 (18:00)</li>
                        <li>상세 내용 메모 내용 출력</li>
                    </ul>
                    <ul className='contentBorderBox'>
                        <li>제목</li>
                        <li>장소 위치명</li>
                        <li>2023.00.00 (14:00) ~ 2023.00.00 (18:00)</li>
                        <li>상세 내용 메모 내용 출력</li>
                    </ul>
                </div>
            </AccordionBox>
            <div className='amountBox'>
                <h5 className='subTitle'>Deposit amount</h5>
                <div className='formItem'>
                    <h5>진료비(KRW)</h5>
                    <input className='amountInput' type='text' value='2,500,000' />
                </div>
                <div className='formItem'>
                    <h5>숙박비(KRW)</h5>
                    <input className='amountInput' type='text' value='2,500,000' />
                </div>
                <div className='formItem'>
                    <h5>관광비(KRW)</h5>
                    <input className='amountInput' type='text' value='2,500,000' />
                </div>
                <div className='formItem'>
                    <h5>기타(KRW)</h5>
                    <input className='amountInput' type='text' value='2,500,000' />
                </div>
                <div className='formItem amountItem'>
                    <h5>총 의료 관광비</h5>
                    <p>3,000,000</p>
                </div>
                <div className='formItem amountItem'>
                    <h5>플랫폼 사용료 (총 의료 관광비 10%)</h5>
                    <p>300,000</p>
                </div>
                <hr className='dashed' />
                <div className='formItem amountItem'>
                    <h4>총 계약금</h4>
                    <p>
                        3,300,000 <small>(KRW)</small>
                    </p>
                </div>
                <div className='formItem amountItem'>
                    <h3>Advance payment</h3>
                </div>
                <hr className='dashed' />
                <div className='formItem amountItem'>
                    <h5>총 계약금 10%</h5>
                    <p>
                        3,300,000 <small>(KRW)</small>
                    </p>
                </div>
            </div>
            <div className='shadowBox'>
                <div>
                    입국 이전 추가 치료 및 일정 변경에 따라 2차 추가 계약금이 발생할 수 있으며, 입국 이후 의료 상담 및
                    관광 일정에 따른 금액 변경 사항은 현장에서 결제가 이뤄집니다.
                </div>
                <span>견적서가 승인되면 정책에 따라 계약금 반환이 불가합니다.</span>
            </div>
        </FormWrap>
    );
};
