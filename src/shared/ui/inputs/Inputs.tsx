import {FC} from 'react';
import './inputStyle.scss';


interface InputsProps {
    placeholder: string;
    classNameInput: string;
    type: string
}
export const Inputs: FC<InputsProps> = ({placeholder= 'olivia@untitledui.com', classNameInput= 'input', type="text"}) => {


    return (
        <>
            <input className={classNameInput} placeholder={placeholder} type={type}/>
        </>
    );
}

