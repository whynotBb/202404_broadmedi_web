import React, {useState} from 'react';
import './ChattingRoom.style.css';
import Profile from '../../../../common/Profile/Profile';
import profile01 from '../../../../images/profile_img_1.png';
import flag01 from '../../../../images/flag_1.svg';
import photo01 from '../../../../images/post_sample_img.png';
import ChattingSend from './ChattingSend/ChattingSend';
import Modal from '../../../../common/Modal/Modal';
import HealthChart from './HealthChart';
import Alert from '../../../../common/Alert/Alert';
import Dropdown from '../../../../common/Dropdown/Dropdown';
import Toggle from '../../../../common/Toggle/Toggle';

const ChattingRoom = () => {
  // 건강차트 모달 여닫기
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal((current) => !current);
  };
  //alert open
  const [openAlert, setOpenAlert] = useState(false);
  const closeAlertHandler = () => {
    setOpenAlert(false);
  };
  //translate state
  const [isTranslate, setIsTranslate] = useState(false);
  const translateHandler = () => {
    setIsTranslate((current) => !current);
    setOpenAlert(true);
  };
  const optionData = ['한국어', '영어', '베트남어', '태국어'];
  return (
    <div className='chattingRoomWrap'>
      <div className='chattingRoomHeader'>
        <Profile profileImg={profile01} nationImg={flag01} />
        <h3>김승호</h3>
        <ul className='shortcut'>
          <li className='call'>call</li>
          <li className='video'>video</li>
          <li className={`translate ${isTranslate ? 'on' : ''}`} onClick={translateHandler}>
            translate
          </li>
          <li className='more'>video</li>
        </ul>
      </div>
      <Alert size='sm' className={openAlert ? 'open' : ''} openAlertHandler={closeAlertHandler}>
        <div className='formBox'>
          <p>수신 메시지 번역하기</p>
          <Dropdown placeholder='한국어' optionData={optionData} />
        </div>
        <div className='toggleBox'>
          <p>자동번역</p>
          <Toggle id='toggle' />
        </div>
      </Alert>

      {/* 채팅룸 */}
      <div className='chattingRoomBody'>
        <div className='dateTime'>2023년 05월 08일</div>

        {/* s: 메시지 타입 : file */}
        <div className='msgBox yourMsg'>
          <div className='profileBox'>
            <Profile profileImg={profile01} nationImg={flag01} />
          </div>
          <h4 className='name'>김승호</h4>
          <div className='msg file'>
            File_document 164909909 64732117418649094.JPG
            <span className='fileInfo'>165MB·JPG</span>
          </div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        <div className='msgBox myMsg'>
          <div className='msg file'>
            File_document 164909909 64732117418649094.JPG
            <span className='fileInfo'>165MB·JPG</span>
          </div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        {/* e: 메시지 타입 : file */}

        {/* s: 메시지 타입 : photo */}
        <div className='msgBox yourMsg'>
          <div className='profileBox'>
            <Profile profileImg={profile01} nationImg={flag01} />
          </div>
          <h4 className='name'>김승호</h4>
          <div className='msg photo'>
            <img src={photo01} alt='' />
          </div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        <div className='msgBox myMsg'>
          <div className='msg photo'>
            <img src={photo01} alt='' />
          </div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        {/* e: 메시지 타입 : photo */}

        {/* s: 메시지 타입 : callDetails */}
        <div className='msgBox yourMsg'>
          <div className='profileBox'>
            <Profile profileImg={profile01} nationImg={flag01} />
          </div>
          <h4 className='name'>김승호</h4>
          <div className='msg callDetails'>99:99</div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        <div className='msgBox myMsg'>
          <div className='msg callDetails'>99:99</div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        {/* e: 메시지 타입 : callDetails */}

        <div className='dateTime'>2023년 05월 09일</div>

        {/* s: 메시지 타입 : 일반 */}
        <div className='msgBox yourMsg'>
          <div className='profileBox'>
            <Profile profileImg={profile01} nationImg={flag01} />
          </div>
          <h4 className='name'>김승호</h4>
          <div className='msg'>네 확인해 드리겠습니다</div>
          <div className='global'></div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        <div className='msgBox myMsg'>
          <div className='msg'>네 확인해 드리겠습니다</div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        {/* e: 메시지 타입 : 일반 */}

        {/* s: 메시지 타입 : noti */}
        <div className='msgBox myMsg'>
          <div className='noti'>
            <h5>알림</h5>
            <div className='notiMsg'>"일정"이 작성되었습니다. "일정"이 작성되었습니다.</div>
            <div className='notiBtn'>일정 확인하기</div>
          </div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        <div className='msgBox yourMsg'>
          <div className='noti'>
            <h5>알림</h5>
            <div className='notiMsg'>"건강차트"가 작성되었습니다.</div>
            <div className='notiBtn' onClick={openModalHandler}>
              건강차트 확인하기
            </div>
          </div>
          <div className='info'>
            <div className='num'>1</div>
            <div className='time'>14:53</div>
          </div>
        </div>
        {/* e: 메시지 타입 : noti */}

        {/* s: 메시지 박스 최대 가로 */}
        <div className='msgBox yourMsg'>
          <div className='profileBox'>
            <Profile profileImg={profile01} nationImg={flag01} />
          </div>
          <h4 className='name'>김승호</h4>
          <div className='msg'>
            네 확인해 드리겠습니다네 확인해 드리겠습니다네 확인해 드리겠습니다네 확인해 드리겠습니다네 확인해
            드리겠습니다네 확인해 드리겠습니다
          </div>
          <div className='global'></div>
          <div className='info'>
            <div className='num'></div>
            <div className='time'>14:53</div>
          </div>
        </div>
      </div>
      <ChattingSend />
      <Modal className={openModal ? 'open' : ''} openModalHandler={openModalHandler}>
        <h3 className='modalTitle'>건강차트</h3>
        <div className='modalScrollBox'>
          <HealthChart />
        </div>
      </Modal>
    </div>
  );
};

export default ChattingRoom;
