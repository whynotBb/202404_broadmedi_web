import React, {useState} from 'react';
import Button from '../../../../common/Button/Button';
import Modal from '../../../../common/Modal/Modal';
import FileInput from '../../../../common/FileInput/FileInput';
import {MedicalEstimateSheetForm} from './MedicalEstimateSheetForm';
import ViewDocument from './ViewDocument';

const MedicalEstimateSheetAdd = ({viewHandler}) => {
    // 직접 추가한 서류 메뉴 여닫기
    const [openMenu, setOpenMenu] = useState(false);
    const openMenuHandler = () => {
        setOpenMenu((current) => !current);
    };
    // 모달 여닫기
    //openModal : 파일 업로드
    const [openModal, setOpenModal] = useState(false);
    const openModalHandler = () => {
        if (openMenu) {
            setOpenMenu(false);
        }
        setOpenModal((current) => !current);
    };
    // openModal2 : 의료관광 추가 견적서
    const [openModal2, setOpenModal2] = useState(false);
    const openModalHandler2 = () => {
        setOpenModal2((current) => !current);
    };

    // openModal3 : 의료관광 추가 견적서 보기
    const [openModal3, setOpenModal3] = useState(false);
    const openModalHandler3 = () => {
        setOpenModal3((current) => !current);
    };

    // openModal4 : 의료관광 추가 견적서 보기(수정X)
    const [openModal4, setOpenModal4] = useState(false);
    const openModalHandler4 = () => {
        setOpenModal4((current) => !current);
    };
    // input file 이벤트
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };
    return (
        <>
            <div className='chattingDrawerWrap'>
                <h3 className='title'>
                    <span className='btn_prev' onClick={() => viewHandler(0)}>
                        이전
                    </span>
                    의료관광 추가 견적서
                </h3>
                <h4 className='subTitle'>의료관광 추가 견적서</h4>
                <div className='estimateWrap noFile'>
                    <p className='fileName'>견적서가 업로드 되지 않았습니다.</p>
                </div>

                <div className='estimateWrap'>
                    <p className='fileName'>의료관광 추가 견적서_20231215</p>
                    <div className='dateTime'>2023년 09월 30일 14:00</div>
                    <div className='btnHiddenMenu' onClick={openMenuHandler}></div>
                    <ul className={`hiddenMenu ${openMenu && 'on'}`}>
                        <li onClick={openModalHandler}>수정하기</li>
                    </ul>
                </div>

                <div className='estimateWrap'>
                    <p className='fileName' onClick={openModalHandler3}>
                        의료관광 추가 견적서_20231215
                    </p>
                    <div className='dateTime'>2023년 09월 30일 14:00</div>
                </div>

                {/* 결제완료 : 파일명 클릭 > 견적서 모달 open */}
                <div className='estimateWrap'>
                    <p className='fileName' onClick={openModalHandler4}>
                        의료관광추가견적서_20231215의료관광견적서_20231215의료관광견적서_20231215
                    </p>
                    <div className='dateTime'>2023년 09월 30일 14:00</div>
                    <span className='confirm'>결제완료</span>
                </div>
                <div className='drawerBtnWrap'>
                    <Button type='upload' fn={openModalHandler2}>
                        작성하기
                    </Button>
                </div>
            </div>
            {/* 파일 업로드 모달  */}
            <Modal className={openModal ? 'open' : ''} openModalHandler={openModalHandler}>
                <h3 className='modalTitle'>파일 업로드</h3>
                <div className='fileBox wide'>
                    <h5 className='contentsTitle'>
                        파일 첨부
                        <small>(jpg,jpeg,png,pdf만 첨부해 주세요.)</small>
                    </h5>
                    <FileInput handleFileChange={handleFileChange} fileName={fileName} />
                </div>
                <div className='modalBottom'>
                    <Button type='secondary' size='lg' fn={openModalHandler}>
                        취소
                    </Button>
                    <Button type='primary' size='lg'>
                        파일 업로드
                    </Button>
                </div>
            </Modal>

            {/* 의료관광견적서 모달 */}
            <Modal className={openModal2 ? 'open' : ''} openModalHandler={openModalHandler2}>
                <h3 className='modalTitle'>의료관광 추가 견적서</h3>
                <div className='modalScrollBox'>
                    <MedicalEstimateSheetForm />
                    <div className='modalBottom'>
                        <Button type='secondary' size='lg' fn={openModalHandler2}>
                            취소
                        </Button>
                        <Button type='primary' size='lg'>
                            저장 및 공유
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* 의료관광견적서 모달 */}
            <Modal className={openModal3 ? 'open' : ''} openModalHandler={openModalHandler3}>
                <h3 className='modalTitle'>의료관광 추가 견적서</h3>
                {/* ↓ exceptBtn : 스크롤 영역에 버튼을 제외시키는 경우 */}
                <div className='modalScrollBox exceptBtn'>
                    <ViewDocument />
                </div>
                <div className='modalBottom'>
                    <Button type='primary' size='lg' fn={openModalHandler3}>
                        수정
                    </Button>
                </div>
            </Modal>
            {/* 의료관광견적서 모달 : 결제 완료*/}
            <Modal className={openModal4 ? 'open' : ''} openModalHandler={openModalHandler4}>
                <h3 className='modalTitle'>의료관광 추가 견적서</h3>
                {/* ↓ exceptBtn : 스크롤 영역에 버튼을 제외시키는 경우 */}
                <div className='modalScrollBox exceptBtn'>
                    <ViewDocument />
                </div>
            </Modal>
        </>
    );
};

export default MedicalEstimateSheetAdd;
