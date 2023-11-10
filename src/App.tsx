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
import HostNoticeItemNoticeManageModal from 'views/HostNoticeManageModal';
import NoticeModal from 'views/NoticeModal';
import HostToDoListManageModal from 'views/HostToDoListManageModal';
import ToDoList from 'views/ToDoListModal';
import StudyDate from 'views/StudyDateModal';

interface Props {
  noticeItem: StudyNoticeListItem;
}

function App() {

  return (
    <div>
      {/* <MyPage /> */}
      {/* <StudyCreate /> */}
      {/* <HostNoticeItemNoticeManageModal /> */}
      {/* <NoticeModal /> */}
      {/* <HostToDoListManageModal /> */}
      {/* <ToDoList /> */}
      <StudyDate />
    </div>
  );
}

export default App;
