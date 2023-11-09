import React from 'react';
import { JoinedStudyListItem } from 'types';
import './style.css';

//          interface: 참가한 스터디 리스트 아이템 컴포넌트 Props           //
interface Props {
  joinedStudyItem: JoinedStudyListItem;
}

//          component: 참가한 스터디 리스트 아이템 컴포넌트          //
export default function JoinedListItem({ joinedStudyItem }: Props) {
  //           state: Properties           //
  const { title, category, authority, endDays } = joinedStudyItem;
  const { totalDays, joinDays, absentDays, lateDays } = joinedStudyItem;

  //            render: 참가한 스터디 리스트 아이템 렌더링            //
  return (
    <div className='joined-list-box'>
      <div className='joined-study-title-box'>
        <div className='joined-study-title-text'>{title}</div>
      </div>
      <div className='joined-study-category-box'>
        <div className='joined-study-category-text'>{category}</div>
      </div>
      <div className='joined-study-authority-box'>
        <div className='joined-study-authority-text'>{authority}</div>
      </div>
      <div className='joined-study-end-day-box'>
        <div className='joined-study-end-day-text'>{endDays}</div>
      </div>
      <div className='joined-study-total-day-box'>
        <div className='joined-study-total-day-text'>{totalDays}</div>
      </div>
      <div className='joined-study-join-day-box'>
        <div className='joined-study-join-day-text'>{joinDays}</div>
      </div>
      <div className='joined-study-absent-day-box'>
        <div className='joined-study-absent-day-text'>{absentDays}</div>
      </div>
      <div className='joined-study-late-day-box'>
        <div className='joined-study-late-day-text'>{lateDays}</div>
      </div>
    </div>
  );
}
