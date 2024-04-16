import React from 'react';
import Profile from '../../../../common/Profile/Profile';

const ChattingDrawerDefault = ({profileImg, nationImg, viewHandler, scheduleBoxHandler}) => {
    return (
        <>
            <h3 className='title'>의료 관광</h3>
            <div className='drawerProfile'>
                <div className='profileBox'>
                    <Profile profileImg={profileImg} nationImg={nationImg} type='md' />
                    <h3 className='name'>김승호</h3>
                </div>
                <div className='activeHistory'>6시간 전 활동 중</div>
                <ul className='userSetting'>
                    <li className='btn_profile' onClick={() => viewHandler(1)}>
                        프로필
                    </li>
                    <li className='btn_alarm'>알림 끄기</li>
                </ul>
            </div>
            <div className='stepInfo'>
                <p>1 단계 : 초기상담</p>
                {/* 단계에 따라 텍스트 변경
                    <p>2 단계 : 견적</p>
                    <p>3 단계 : 비자신청</p>
                    <p>4 단계 : 치료관광</p>
                    <p>5 단계 : 에프터케어</p> */}
                <ul className='stepBar'>
                    {/* 진행 상태에 따라 li 에 class on 추가 */}
                    <li className='on'></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='drawerMenuWrap'>
                <ul>
                    <li onClick={() => viewHandler(2)}>게시글</li>
                    <li onClick={scheduleBoxHandler}>일정</li>
                    {/* <li onClick={() => viewHandler(3)}>건강차트 요청</li> */}
                    <li>건강차트 요청</li>
                    <li onClick={() => viewHandler(4)}>의료관광 견적서</li>
                    <li onClick={() => viewHandler(5)}>의료관광 추가 견적서</li>
                    <li onClick={() => viewHandler(6)}>비자발급 대행 견적서</li>
                    <li onClick={() => viewHandler(7)}>공유 서류함</li>
                    <li onClick={() => viewHandler(8)}>유치실적 보고서</li>
                </ul>
            </div>
            <div className='drawerBottom'>
                {/* 로그아웃? = 알맞는 의미로 넣어주세요 */}
                <div className='out'>로그아웃</div>
            </div>
        </>
    );
};

export default ChattingDrawerDefault;
