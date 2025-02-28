import {FC, useState} from 'react';
import classNames from 'classnames';
import './inputStyle.scss';

interface InputsProps {
    placeholder: string;
    classNameInput: string;
    type: string;
}

export const Inputs: FC<InputsProps> = ({placeholder= 'olivia@untitledui.com', classNameInput= 'input', type="text"}) => {
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        setIsError(!inputValue.endsWith('@gmail.com'));
    };

    return (
        <>
            <input
                className={classNames(classNameInput, { 'inputError': isError })}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
            />
        </>
    );
}