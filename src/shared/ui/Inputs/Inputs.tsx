import {FC} from 'react';
import './inputStyle.scss';


interface InputsProps {
    placeholder: string;
    classNameInput: string;
}
export const Inputs: FC<InputsProps> = ({placeholder= 'olivia@untitledui.com', classNameInput= 'input'}) => {


    return (
        <>
            <input className={classNameInput} placeholder={placeholder}/>
        </>
    );
}

