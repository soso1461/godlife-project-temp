import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import './style.css';

//          component: 스터디 방 재설정 기간 설정 컴포넌트          //
const DatePickerModifyStudyComponent  = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    //          state: 스터디 종료일 상태          //
    const [endDate, setEndDate] = useState<Date | null>(null);  

    //          event handler: 종료일 이벤트 처리          //
    const endDateHandle = (date: Date | null) => {
      setEndDate(date);
    };

    //          render: 캘린더 컴포넌트 렌더링          //
    return (
    <div className='datepicker-modify-study-box'>
      <DatePicker className='modify-study-end-date' showPopperArrow={false} locale={ko} 
      selected={endDate} onChange={endDateHandle} closeOnScroll={true} minDate={selectedDate} dateFormat='yyyy. MM. dd' placeholderText='스터디 종료일' />
    </div>
  );
}

export default DatePickerModifyStudyComponent;