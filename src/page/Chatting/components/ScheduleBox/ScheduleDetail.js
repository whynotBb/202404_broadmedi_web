import FormWrap from '../../../../common/FormWrap/FormWrap';

const ScheduleDetail = () => {
  return (
    <FormWrap>
      <div className='editBox'>
        <span className='modify'>modify</span>
        <span className='del'>delete</span>
      </div>
      <div className='formItem col'>
        <p className='category'>진료/수술</p>
        <h3 className='scheduleTitle'>
          쌍커풀수술<span className='more'>더보기</span>
        </h3>
      </div>

      <div className='formItem dateTimeItem'>
        <ul className='dateTime'>
          <li>시작</li>
          <li>2023년 09월 01일 목요일 </li>
          <li>08:00</li>
        </ul>
        <ul className='dateTime'>
          <li>종료</li>
          <li>2023년 09월 01일 목요일 </li>
          <li>08:00</li>
        </ul>
      </div>

      <div className='formItem col'>
        <div className='location'>
          <span className='pin'>pin</span>
          <input type='text' value='가천대길병원 암센터. 대한민국 인천광역시 남동구,' readOnly />
        </div>
      </div>
      <div className='contentsBox'>
        수술 9일 14:00
        <br />
        수술 시간 약 2시간 소요 예상
        <br />
        수술 후 1인실 이동
      </div>
    </FormWrap>
  );
};
export default ScheduleDetail;
