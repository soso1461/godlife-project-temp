import { BrowserRouter, Outlet, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import FindLogin from './views/Authentication/soo';
import './views/Authentication/soo/style.css';
import { LOGIN_FIND_PATH } from './constant';
import MyPage from 'views/MyPage';
import './views/MyPage/style.css';
import StudyCreate from 'views/StudyCreate';
import './components/Dropdown1Category/style.css';
import HostNoticeItem from 'components/HostNoticeItem';
import { StudyNoticeMock } from 'mocks';
import { StudyNoticeListItem } from 'types';
import NoticeManageModal from 'views/NoticeManageModal';

interface Props {
  noticeItem: StudyNoticeListItem;
}

function App() {

  return (
    <div>
      {/* <MyPage /> */}
      {/* <StudyCreate /> */}
      <NoticeManageModal />
    </div>
  );
}

export default App;
