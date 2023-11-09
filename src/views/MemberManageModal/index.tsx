import React, { useEffect, useState } from 'react';
import './style.css';
import { userGradeListMock } from 'mocks';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { UserGradeList } from 'types';
import ForceExitModal from 'components/ForceExitModal';

//           component: 멤버 관리 리스트 컴포넌트           //
export default function MemberManageModal({modalCloseHandler}: {modalCloseHandler: () => void}) {

    //           interface: 멤버 관리 리스트 아이템 컴포넌트 Props           //
    interface Props {
        userGradeList: UserGradeList;
    }

    //           event handler: MyPage의 modalCloseHandler를 가져와서 이벤트 처리           //
    const closeModal = () => {
        modalCloseHandler();
    }

    //           component: 멤버 관리 리스트 아이템 컴포넌트           //
    function MemberManageList({ userGradeList }: Props) {

        
        //           state: Properties           //
        const {userNickname, userProfileImageUrl, userGrade} = userGradeList;
        //           state: 프로필 이미지 상태           //
        const [profileImage, setProfileImage] = useState<string | null>('');
        //           state: 모달 show 상태           //
        const [showModal, setShowModal] = useState<boolean>(false);
        //           state: 유저 리스트 상태           //
        const [userList, setUserList] = useState<UserGradeList[]>(userGradeListMock);
        //           state: 선택한 유저 상태           //
        const [selectedUser, setSelectedUser] = useState<UserGradeList | null>(null);
        
        //           function: userNickname 불러오기           //
        const userName = userGradeList.userNickname;

        //           event handler: 강제퇴장을 눌렀을 때의 강제퇴장 모달 창 띄우기 이벤트 처리           //
        const forceExitHandler = () => {
            if (userGradeList) {
                setSelectedUser(userGradeList);
                setShowModal(true);
            }
        };
        //           event handler: 취소를 눌렀을 때에 강제퇴장 모달 창 지우기 이벤트 처리           //
        const forceExitCancelHandler = () => {
            setShowModal(false);
        };

        //           event handler: 방장일때의 아이콘 이벤트 처리           //
        const masterIconHandler = userGrade === '방장' ? (
            <div className='master-icon'></div>
        ) : null;

        //           event handler: 방장 여부를 확인 후 강제퇴장 버튼 렌더링 처리           //
        const checkRenderExitBox = userGrade !== '방장';

        //          Effect: 유저 프로필 사진 조회를 위한 함수          //
        useEffect(() => {
            if (userProfileImageUrl) {
                setProfileImage(userProfileImageUrl);
            }
        }, [userProfileImageUrl]);

        //           render: 멤버 관리 리스트 아이템 렌더링           //
        return (
            <div className='member-manage-user-list-box'>
                <div className='member-manage-user-info-box'>
                    <div className='member-manage-user-profile-icon-box'>
                        <div className='member-manage-user-profile-icon'></div>
                        {profileImage === '' ? 
                        <div className='member-manage-user-profile-default-image'></div> 
                        : <div className='member-manage-user-profile-image' style={{ backgroundImage: `url(${profileImage})` }}></div>}
                    </div>
                    <div className='member-manage-user-nickname-box'>
                        {masterIconHandler}
                        <div className='member-manage-user-nickname-text'>{userNickname}</div>
                    </div>
                </div>
                <div className='member-manage-user-authority-exit-box'>
                    <div className='member-manage-user-authority-box'>
                        <div className='member-manage-user-authority-text'>{userGrade}</div>
                    </div>
                    {checkRenderExitBox && (
                        <div className='member-manage-user-exit-box' onClick={forceExitHandler}>
                            <div className='member-manage-user-exit-text'>{'강제 퇴장'}</div>
                        </div>
                    )}
                    
                    {showModal && (
                    <ForceExitModal
                        userName={userName}
                        onClose={forceExitCancelHandler}
                        onForceExit={() => {
                            if (selectedUser) {
                                const updatedUserList = userList.filter(user => user !== selectedUser);
                                setUserList(updatedUserList);
                                forceExitCancelHandler();
                            }
                        }}
                    />
                )}
                </div>
            </div>
        );
    }

    //           render: 멤버 관리 리스트 컴포넌트 렌더링           //
    return (
        <div id='member-manage-wrapper'>
            <div className='member-manage-card'>
                <div className='member-button-box' onClick={closeModal}>
                    <button type='button' className='btn btn-primary' disabled data-bs-toggle='button'>X</button>
                </div>
                <div className='member-manage-main-box'>
                <Scrollbars renderTrackVertical={(props) => <div {...props} className='member-manage-track-vertical' />} 
                renderThumbVertical={(props) => <div {...props} className='member-manage-thumb-vertical' />}>
                    {userGradeListMock.map((userGradeListItem) => (
                    <MemberManageList userGradeList={userGradeListItem} />
                    ))}
                </Scrollbars>
                </div>
            </div>
        </div>
    );
}
