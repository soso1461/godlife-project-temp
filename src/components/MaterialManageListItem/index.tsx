import React, { useState } from 'react';
import './style.css';
import { MaterialManageListItem } from 'types';

//           interface: 자료 관리하기 리스트 아이템 컴포넌트 Props           //
interface Props {
    materialManageListItem: MaterialManageListItem;
}

//           component: 자료 관리하기 리스트 컴포넌트           //
export default function MaterialManageList({ materialManageListItem }: Props) {

    //           state: Properties           //
    const { studyMaterialNumber, studyMaterialName, studyMaterialDatetime, studyMaterialWriter } = materialManageListItem;
    
    //           state: 체크박스 선택 상태           //
    const [isChecked, setIsChecked] = useState<boolean>(false);

    //           render: 자료 관리하기 리스트 렌더링           //
    return (
        <div className='material-manage-list-index-box'>
            <div className='material-manage-check-box' onClick={() => setIsChecked(!isChecked)}>
                {isChecked ? <div className='material-manage-check-icon'></div> : null}
            </div>
            <div className='material-manage-serial-number-box'>
                <div className='material-manage-serial-number-index'>{studyMaterialNumber}</div>
            </div>
            <div className='material-name-box'>
                <div className='material-name-index'>{studyMaterialName}</div>
            </div>
            <div className='material-upload-date-box'>
                <div className='material-upload-date-index'>{studyMaterialDatetime}</div>
            </div>
            <div className='material-write-user-box'>
                <div className='material-write-user-index'>{studyMaterialWriter}</div>
            </div>
        </div>
    );
}
