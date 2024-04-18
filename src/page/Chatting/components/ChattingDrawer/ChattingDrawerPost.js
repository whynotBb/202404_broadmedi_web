import React from "react";
import Button from "../../../../common/Button/Button";
import Modal from "../../../../common/Modal/Modal";
import postImg from "../../../../images/icon_bg_img.svg";
import postDetailImg from "../../../../images/post_sample_img.png";
import { useState } from "react";
import FileInput from "../../../../common/FileInput/FileInput";

const ChattingDrawerPost = ({ viewHandler }) => {
  const samplePosts = [
    {
      text: "올해, 의료관광 안내를 위해 게시판에 글을 작성해주세요.",
      img: null,
      date: "2023년 09월 10일",
    },
    {
      text: "올해, 의료관광 안내를 위해 게시판에 글을 작성해주세요.",
      img: postImg,
      date: "2023년 09월 10일",
    },
    {
      text: "올해, 의료관광 안내를 위해 게시판에 글을 작성해주세요.",
      img: postImg,
      date: "2023년 09월 10일",
    },
    {
      text: "올해, 의료관광 안내를 위해 게시판에 글을 작성해주세요.",
      img: null,
      date: "2023년 09월 10일",
    },
  ];
  // 모달 여닫기
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal((current) => !current);
  };
  const [openModal2, setOpenModal2] = useState(false);
  const openModalHandler2 = () => {
    setOpenModal2((current) => !current);
  };
  // input file 이벤트
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <>
      <div className="chattingDrawerWrap">
        <h3 className="title">
          <span className="btn_prev" onClick={() => viewHandler(0)}>
            이전
          </span>
          게시글
        </h3>

        <h4 className="subTitle">
          목록
          <Button type="upload" size="md" fn={openModalHandler2}>
            업로드
          </Button>
        </h4>
        <div className="postWrap">
          {samplePosts.map((post, index) => (
            <div className="postBox" key={index} onClick={openModalHandler}>
              {post.img !== null && (
                <div className="imgBox">
                  <img src={post.img} alt="" />
                </div>
              )}
              <div className="txtBox">{post.text}</div>
              <div className="date">{post.date}</div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        className={openModal ? "open" : ""}
        openModalHandler={openModalHandler}
      >
        <h3 className="modalTitle">게시글</h3>
        <div className="postDetailWrap">
          <h4 className="postTitle">테스트 게시글_0409</h4>
          <div className="contentsWrap">
            <h5 className="contentsTitle">내용</h5>
            <div className="imgBox">
              <img src={postDetailImg} alt="" />
            </div>
            <div className="contentsBox">
              <div className="contents">
                남동현 기자 = 부산시가 운행하고 있는 의료·관광·복지 분야
                특화버스가 시민들로부터 큰 호응을 얻고 있다.
                <br />
                <br />
                특화버스는 취약지역·계층에 맞춤형 서비스 제공을 통해 정책
                사각지대 해소와 함께 시민들의 실제 사례를 통한 정책 체감도 향상
                및 정보 제공에 크게 이바지하고 있다.
                <br />
                <br />
                시가 운영하고 있는 특화버스는 ▲찾아가는 의료버스 ▲전국 최초
                관광형 수요응답형 버스 타바라 ▲전국 최초 장애인 시티투어버스
                나래버스 등이다.
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        className={openModal2 ? "open" : ""}
        openModalHandler={openModalHandler2}
      >
        <h3 className="modalTitle">게시글</h3>
        <div className="postDetailWrap">
          <h4 className="postTitle">
            <input type="text" placeholder="제목을 입력해 주세요" />
          </h4>
          <div className="contentsWrap">
            <h5 className="contentsTitle">내용</h5>
            <div className="contentsBox">
              <textarea rows="11" placeholder="내용을 입력해주세요."></textarea>
            </div>
          </div>
          <div className="fileBox">
            <h5 className="contentsTitle">
              파일 첨부
              <small>(jpg,jpeg,png,pdf만 첨부해 주세요.)</small>
            </h5>
            <FileInput
              handleFileChange={handleFileChange}
              fileName={fileName}
            />
          </div>
        </div>
        <div className="modalBottom">
          <Button type="secondary" size="lg" fn={openModalHandler2}>
            취소
          </Button>
          <Button type="primary" size="lg">
            저장 및 공유
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ChattingDrawerPost;
