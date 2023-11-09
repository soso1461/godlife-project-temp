import { StudyNoticeListItem } from 'types';
import './style.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

//          interface: 공지사항 리스트 아이템 컴포넌트 Props          //
interface Props {
    noticeItem: StudyNoticeListItem;
}

//          component: 방장 공지사항 리스트 아이템 컴포넌트          //
export default function HostNoticeItem({noticeItem} : Props){

  //          state: Properties          //
  const {studyNumber, studyNoticeNumber,studyNoticeContents} = noticeItem;
  //          state: 공지사항 리스트 textarea 참조 상태          //
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  //          state: 공지사항 리스트 상태              //
  const [notice, setNotice] = useState<string>(studyNoticeContents);
  //          state: 공지사항 textarea 수정 상태          //
  const [textareaEdit, setTextareaEdit] = useState<boolean>(false);

  //           event handler: 공지사항 리스트 변경 이벤트 처리          //
  const onNoticeChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = event.target.value;
    setNotice(comment);
  };

  //           event handler: 댓글 수정 버튼 클릭 이벤트 처리          //
  const onEditCommentsButtonClickHandler = () => {
    setTextareaEdit(!textareaEdit);
  };
  //           event handler: 댓글 삭제 버튼 클릭 이벤트 처리          //
  const onDeleteCommentsButtonClickHandler = () => {
    alert('삭제');
  };

  //          effect: 공지사항 textarea의 높이를 동적으로 조절          //
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 스크롤 높이로 설정
    }
  }, [notice]);

  //          render: 공지사항 리스트 아이템 컴포넌트 렌더링          //  
  return (
    <div className='notice-list-item-box'>
      <div className='notice-list-item-top'>
        <div className='notice-list-item-icon-box'>
          <div className="notice-list-item-icon"></div>
        </div>
        {textareaEdit ? ( // 수정 모드일때
              <textarea
                  className={`notice-list-item-contents ${textareaEdit ? 'editing' : ''}`}
                  rows={1}
                  value={notice}
                  onChange={onNoticeChangeHandler}
                  ref={textareaRef}
              />
          ) : ( // 아닐 때
              <textarea
                  className='notice-list-item-contents'
                  rows={1}
                  value={notice}
                  onChange={onNoticeChangeHandler}
                  ref={textareaRef}
                  readOnly
              />
          )}
        <div className='notice-write-edit-icon-box'>
            <button
                className={`notice-write-edit-box ${textareaEdit ? 'editing' : ''}`}
                onClick={onEditCommentsButtonClickHandler}>
                {textareaEdit ? '완료' : '수정'}
            </button>
            <button className='notice-write-delete-box' onClick ={onDeleteCommentsButtonClickHandler}>{'삭제'}</button>
        </div>
      </div>
      <div className='notice-list-item-bottom'>
        <div className="notice-list-item-bottom-line"></div>
      </div>
    </div>
    );
}