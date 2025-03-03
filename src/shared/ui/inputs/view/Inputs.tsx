import { FC } from 'react';
import classNames from 'classnames';
import './inputStyle.scss';
import { InputsProps } from '../types/types.ts';

export const Inputs: FC<InputsProps> = ({ placeholder, classNameInput = 'input', type = 'text', onChange, error }) => {

    return (
        <>
            <input
                className={classNames(classNameInput, { 'inputError': error })}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
            />
        </>
    );
};