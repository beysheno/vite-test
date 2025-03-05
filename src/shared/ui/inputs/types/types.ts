export interface InputsProps {
    placeholder: string;
    classNameInput: 'input' | 'inputError' | 'inputDisabled';
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}