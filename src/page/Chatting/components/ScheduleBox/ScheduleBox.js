import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import koLocale from '@fullcalendar/core/locales/es';

import './scheduleBox.style.css';
import {useEffect} from 'react';

const ScheduleBox = () => {
    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };
    useEffect(() => {
        fixDayNumbers();
    }, []);
    const fixDayNumbers = () => {
        const dayNumberElements = document.querySelectorAll('.fc-daygrid-day-number');
        dayNumberElements.forEach((dayNumberElement) => {
            let day = dayNumberElement.textContent;
            day = day.replace('일', '');
            dayNumberElement.textContent = day;
        });
    };
    return (
        <div className='scheduleBoxWrap'>
            <h2 className='title'>
                일정<button className='close'>close</button>
            </h2>
            <div className='calendarWrap'>
                <FullCalendar
                    locales={[koLocale]}
                    locale='ko'
                    plugins={[dayGridPlugin]}
                    initialView='dayGridMonth'
                    dateClick={handleDateClick}
                />
            </div>
        </div>
    );
};
export default ScheduleBox;
