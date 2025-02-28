import {FC} from 'react';
import './inputStyle.scss';

export const Inputs: FC = () => {


    return (
        <div className="App">
            <h4>Email</h4>
            <input className='input' placeholder={'olivia@untitledui.com'}/>
        </div>
    );
}

