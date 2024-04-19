import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import koLocale from '@fullcalendar/core/locales/es';

import './scheduleBox.style.css';
import Modal from '../../../../common/Modal/Modal';
import {useState} from 'react';
import interactionPlugin from '@fullcalendar/interaction';
import ScheduleForm from './ScheduleForm';
import Button from '../../../../common/Button/Button';
import ScheduleDetail from './ScheduleDetail';

const ScheduleBox = ({close}) => {
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);
  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setCoordX(x);
    setCoordY(y);
    // console.log(`Clicked at coordinates: (${x}, ${y})`);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const modalCloseHandler = () => {
    setModalOpen(false);
  };
  const [modalOpen2, setModalOpen2] = useState(false);
  const modalCloseHandler2 = () => {
    setModalOpen2(false);
  };

  const handleDateClick = (arg) => {
    if (modalOpen2) {
      setModalOpen2(false);
    }

    if (coordY > 300 && coordY < 400) {
      setCoordY(coordY - 130);
    } else if (coordY > 400 && coordY < 560) {
      setCoordY(coordY - 280);
    } else if (coordY > 560) {
      setCoordY(150);
    }
    if (coordX > 580) {
      setCoordX(coordX - 550);
    }
    setModalOpen(true);
  };

  const handleEventClick = (eventInfo) => {
    if (modalOpen) {
      setModalOpen(false);
    }
    if (coordY > 300 && coordY < 400) {
      setCoordY(coordY - 130);
    } else if (coordY > 400 && coordY < 560) {
      setCoordY(coordY - 280);
    } else if (coordY > 560) {
      setCoordY(150);
    }
    if (coordX > 580) {
      setCoordX(coordX - 550);
    }
    setModalOpen2(true);
  };
  const events = [{title: 'Meeting', start: '2024-04-20'}];
  function renderEventContent(eventInfo) {
    return (
      <div className='evnetBar'>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }
  return (
    <div className='scheduleBoxWrap' onClick={handleClick}>
      <h2 className='title'>
        일정
        <button className='close' onClick={close}>
          close
        </button>
      </h2>

      <div className='calendarWrap'>
        <FullCalendar
          locales={[koLocale]}
          initialView='dayGridMonth'
          locale='ko'
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          events={events}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
        />
      </div>
      <div className='customPositionModal' style={{top: coordY, left: coordX}}>
        <Modal className={modalOpen ? 'open' : ''} openModalHandler={modalCloseHandler} size='md' type='noneDim'>
          <div className='modalScrollBox'>
            <ScheduleForm />
            <div className='btnRight'>
              <Button type='primary' fn={modalCloseHandler}>
                저장
              </Button>
            </div>
          </div>
        </Modal>
      </div>

      <div className='customPositionModal' style={{top: coordY, left: coordX}}>
        <Modal className={modalOpen2 ? 'open' : ''} openModalHandler={modalCloseHandler2} size='md' type='noneDim'>
          <ScheduleDetail />
        </Modal>
      </div>
    </div>
  );
};
export default ScheduleBox;
