import React from 'react'
import './style.css';
function ModalSideMenu() {
  return (
    <div className='menu-sidebar'>
    {
        <div className="menu-room">방 설정</div>
        // <div className='menu-room-default'></div>
    }
    {
        // <div className="menu-member">멤버 관리</div>
        <div className="menu-member-default">멤버 관리</div>   
    }
    {
        // <div className="menu-study">{'다음 스터디 설정'}</div>
        <div className='menu-study-default'>{'다음 스터디 설정'}</div>
    }
    {
        // <div className="menu-material">자료관리</div>
        <div className="menu-material-default">자료관리</div>
    }
    </div>
  )
}

export default ModalSideMenu;