import React from 'react'
import './style.css'

export default function StudyRoomExitModal() {
  return (
    <div id='study-room-exit-wrapper'>
        <div className='study-room-exit-card'>
            <div className='study-room-exit-index-box'>
                <div className='study-room-exit-title'>{'{방이름}에서 퇴장하시겠습니까?'}</div>
                <div className='study-room-exit-description-box'>
                    <div className='warning-icon'></div>
                    <div className='study-room-exit-text'>{'해당방의 스터디 활동기록이 모두 삭제됩니다.'}</div>
                </div>
                <div className='study-room-button-box'>
                    <div className='study-room-exit-button-box'>
                        <div className='study-room-exit-button-text'>{'퇴장 확인'}</div>
                    </div>
                    <div className='study-room-cancel-button-box'>
                        <div className='study-room-cancel-button-text'>{'취소'}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
