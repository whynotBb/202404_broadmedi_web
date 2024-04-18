import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import koLocale from "@fullcalendar/core/locales/es";

import "./scheduleBox.style.css";
import Modal from "../../../../common/Modal/Modal";
import { useState } from "react";
import interactionPlugin from "@fullcalendar/interaction";
import ScheduleForm from "./ScheduleForm";
import Button from "../../../../common/Button/Button";

const ScheduleBox = ({ close }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalCloseHandler = () => {
    setModalOpen(false);
  };
  const handleDateClick = (arg) => {
    setModalOpen(true);
  };

  // useEffect(() => {
  //   fixDayNumbers();
  // }, []);
  // const fixDayNumbers = () => {
  //   const dayNumberElements = document.querySelectorAll(
  //     ".fc-daygrid-day-number"
  //   );
  //   dayNumberElements.forEach((dayNumberElement) => {
  //     let day = dayNumberElement.textContent;
  //     day = day.replace("일", "");
  //     dayNumberElement.textContent = day;
  //   });
  // };
  const events = [
    { title: "Meeting", start: "2024-04-20" },
    // {
    //   title: "Meeting",
    //   start: "2024-04-10T10:00:00",
    //   end: "2024-11-12T16:00:00",
    //   display: "background",
    //   color: "#ff9f89",
    // },
  ];
  function renderEventContent(eventInfo) {
    return (
      <div className="evnetBar">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }
  return (
    <div className="scheduleBoxWrap">
      <h2 className="title">
        일정
        <button className="close" onClick={close}>
          close
        </button>
      </h2>

      <div className="calendarWrap" style={{ height: "100%" }}>
        <FullCalendar
          locales={[koLocale]}
          initialView="dayGridMonth"
          locale="ko"
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          events={events}
          eventContent={renderEventContent}
        />
      </div>
      <Modal
        className={modalOpen ? "open" : ""}
        openModalHandler={modalCloseHandler}
        size="md"
      >
        <div className="modalScrollBox">
          <ScheduleForm />
          <div className="btnRight">
            <Button type="primary">저장</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ScheduleBox;
