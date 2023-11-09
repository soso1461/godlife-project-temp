import React from 'react'

export default function Header() {
  return (
    <div id = 'header'>
        <div className='logo-box'>
            <div className='logo-icon-box'></div>
            <div className='logo-text'>{'갓생살기'}</div>
        </div>
        <div className='header-right-box'>
            <div className='study-search'>{'스터디 검색'}</div>
            <div className='study-create'>{'스터디 생성'}</div>
            <div className='study-my-page'>{'내 정보 관리'}</div>
        </div>
    </div>
  )
}