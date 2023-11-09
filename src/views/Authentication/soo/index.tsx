import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_PATH } from 'constant';
import emailjs from 'emailjs-com';

//          component: 아이디 및 비밀번호 찾기 페이지         //
export default function FindLogin() {

  //          state: 인증할 이메일 상태         //
  const [email, setEmail] = useState('');

  //          function: 네비게이트 함수         //
  const navigator = useNavigate();
  
  //          event handler: 로그인으로 돌아가기 클릭 이벤트 처리         //
  const onBackToLoginClickHandler = () => {
    navigator(LOGIN_PATH);
  };
  //          event handler: input에 이메일을 넣으면 전송하는 이벤트 처리         //
  const onSendEmailClickHandler = () => {
    sendEmail();
  };
  //          component: 이메일 전송 페이지 컴포넌트         //
  const sendEmail = async () => {
    // ! serviceId, templateId, publicAPI 호출
    const serviceId = 'service_r3utxtm';
    const templateId = 'template_x057lk8';
    emailjs.init('9qwcRR2fGrlX7CHPM');

    try {
      const response = await emailjs.send(serviceId, templateId, {
        to_email: email,
      });

      console.log('이메일 전송 결과:', response);
      alert('이메일이 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('이메일 전송 오류:', error);
      alert('이메일 전송 중 오류가 발생했습니다.');
    }
  };

  //          render: 이메일 전송 페이지 렌더링         //
  return (
    <div id='find-id-login-wrapper'>
      <div className='background-image'>
      <div className='login-box'>
        <div className='logo-icon-box'>
          <div className='logo-icon'></div>
        </div>
        <div className='login-sub-title-box'>
          <div className='login-sub-title-box-text'>{'로그인을 할 수 없습니까?'}</div>
        </div>
        <div className='login-to-link-text-box'>
          <div className='login-to-link-text'>{'다음으로 복구 링크 보내기'}</div>
        </div>
        <input className='input-box' type='email' name='to_email' placeholder='이메일을 입력하세요.' value = {email} onChange={(e) => setEmail(e.target.value)} required />
        <div className='login-to-link-send' onClick={onSendEmailClickHandler}>
          <div className='login-to-link-send-text'>{'복구 링크 보내기'}</div>
        </div>
        <div className='login-return-text-box' onClick={onBackToLoginClickHandler}>
          <div className='login-return-text'>{'로그인으로 돌아가기'}</div>
        </div>
      </div>
      </div>
    </div>
  );
}