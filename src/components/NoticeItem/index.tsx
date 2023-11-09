
import { StudyNoticeListItem } from 'types';
import './style.css';
import { ChangeEvent, useRef, useState } from 'react';

interface Props {
    noticeItem: StudyNoticeListItem;
}

export default function NoticeItem({noticeItem} : Props){

  //          state: Properties                               //
  const {studyNumber, studyNoticeNumber,studyNoticeContents} = noticeItem;
  //          state: 공지사항 리스트 박스 상태         //
  const [showNoticelist, setShowNoticelist] = useState<boolean>(false); 
  //          state: 공지사항 리스트 textarea 참조 상태          //
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  //          state: 공지사항 리스트 상태              //
  const [notice, setNotice] = useState<string>(studyNoticeContents);

  //           event handler: 투두 리스트 변경 이벤트 처리          //
  const onNoticeChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {

    if(!setShowNoticelist) return;    
    const comment = event.target.value;
    setNotice(comment);

    // description: textarea 내용이 바뀔때마다 높이 변경 //
    if (!textareaRef.current) return;
    console.log(textareaRef.current.scrollHeight);
    textareaRef.current.focus();
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    alert('투두 리스트 수정완료');
  }

  //           event handler: 댓글 박스 보기 버튼 클릭 이벤트 처리          //
  const onShowCommentsButtonClickHandler = () => {
    setShowNoticelist(!showNoticelist);
  }

  //          render: 공지사항 리스트 아이템 컴포넌트 렌더링          //  
  return (
    <div className='notice-list-item-box'>
      <div className='notice-list-item-top'>
        <div className='notice-list-item-icon-box'>
          <div className="notice-list-item-icon"></div>
        </div>
        <textarea className='notice-list-item-contents' value = {notice} onChange = {onNoticeChangeHandler}></textarea>
      </div>
      <div className='notice-list-item-bottom'>
        <div className="notice-list-item-bottom-line"></div>
      </div>
    </div>
    );
}