import React, { ChangeEvent, Dispatch, KeyboardEvent,MutableRefObject, SetStateAction ,forwardRef, useRef} from 'react';
import './style.css';

//          interface: Input 상자 컴포넌트 Props          //
interface Props {
  type: 'text' | 'password';
  error?: boolean;
  placeholder: string;
  value?: string;
  setValue: Dispatch<SetStateAction<string>>
  icon?: string;
  errorMessage?: string;
  onKeyDown?: (event : KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
}

//          component: Input 상자 컴포넌트          //
const InputBox = forwardRef<HTMLInputElement, Props>( (props: Props ,ref) => {


    //          state: Properties          //
    const {type, error, placeholder, value, icon,setValue, errorMessage } = props;
    const { onKeyDown, onButtonClick } = props;

    //          event handler: input 값 변경 이벤트 처리          //
    const onInputValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setValue(value);
    }

    //          event handler: input 값 변경 이벤트 처리          //
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (!onKeyDown) return;
      onKeyDown(event);
    }  

    //          render: Input 상자 렌더링         //
    return (
      <div className='auth-middle'>
        <div className= 'inputbox-conatainer'>
            <input className='inputbox' type={type} placeholder={placeholder} value={value} onChange={onInputValueChangeHandler} onKeyDown={onKeyDownHandler}  />            
            {onButtonClick !== undefined && (
              <div className={'icon-box'} onClick={onButtonClick}>
                {icon !== undefined && <div className={icon}></div>}
              </div>
            )}
        </div>
      </div>
    )
});

export default InputBox;
