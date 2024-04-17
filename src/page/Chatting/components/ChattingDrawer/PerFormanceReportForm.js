import DatePicker from '../../../../common/DatePicker/DatePicker';
import Dropdown from '../../../../common/Dropdown/Dropdown';
import FormWrap from '../../../../common/FormWrap/FormWrap';
import RadioWrap from '../../../../common/RadioWrap/RadioWrap';

export const PerFormanceReportForm = () => {
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
                    환자등록번호<em>*</em>
                </h5>
                <input type='text' value='1234567123456' readOnly />
            </div>
            <div className='formItem'>
                <h5>
                    출생년도<em>*</em>
                </h5>
                <input type='text' placeholder='숫자 4자리를 입력해주세요.' />
            </div>
            <div className='formItem'>
                <h5>
                    성별<em>*</em>
                </h5>
                <RadioWrap id='rad_01' title='남' name='gender' />
                <RadioWrap id='rad_02' title='여' name='gender' />
            </div>
            <div className='formItem'>
                <h5>
                    국적<em>*</em>
                </h5>
                <Dropdown />
            </div>
            <div className='formItem'>
                <h5>
                    행정구역(도시명)<em>*</em>
                </h5>
                <input type='text' />
            </div>
            <div className='formItem'>
                <h5>
                    진료일자<em>*</em>
                </h5>
                <DatePicker />
            </div>
            <div className='formItem'>
                <h5>
                    진료과목<em>*</em>
                </h5>
                <input type='text' />
            </div>
            <div className='formItem'>
                <h5>
                    진료비<em>*</em>
                </h5>
                <input type='text' />
            </div>
            <div className='formItem'>
                <h5>
                    계약 유형<em>*</em>
                </h5>
                <input type='text' />
            </div>
            <div className='formItem'>
                <h5>
                    입원일자<em>*</em>
                </h5>
                <DatePicker />
            </div>
            <div className='formItem'>
                <h5>
                    퇴원일자<em>*</em>
                </h5>
                <DatePicker />
            </div>
            <div className='formItem'>
                <h5>
                    주 진단<em>*</em>
                </h5>
                <textarea cols='30' rows='10' placeholder='내용을 입력하세요 (최대 2,000자)'></textarea>
            </div>
            <div className='formItem'>
                <h5>
                    주 진단 추가<em>*</em>
                </h5>
                <textarea placeholder='내용을 입력하세요 (최대 2,000자)'></textarea>
            </div>
        </FormWrap>
    );
};
