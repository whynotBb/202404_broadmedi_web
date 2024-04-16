import AccordionBox from '../../../../common/AccordionBox/AccordionBox';
import Dropdown from '../../../../common/Dropdown/Dropdown';
import FormWrap from '../../../../common/FormWrap/FormWrap';

export const MedicalEstimateSheetForm = () => {
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
            <AccordionBox>
                <h4 className='accordionTitle'>1일차</h4>
                <div className='accordionBody'></div>
            </AccordionBox>
        </FormWrap>
    );
};
