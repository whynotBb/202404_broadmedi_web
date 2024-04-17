import {useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import {registerLocale} from 'react-datepicker';
import {ko} from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.style.css';
registerLocale('ko', ko);

const DatePicker = () => {
    const [startDate, setStartDate] = useState();
    return (
        <div className='datePickerWrap'>
            <ReactDatePicker
                locale='ko'
                dateFormat='YYYY / MM / dd'
                dateFormatCalendar='yyyy년 MM월'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText='YYYY / MM / dd'
            />
        </div>
    );
};
export default DatePicker;
