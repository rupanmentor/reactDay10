import React, { useContext } from 'react';
import { myContext } from '../App';
import CompF from './CompF';

const CompE = () => {
    const [contextValue, setContextValue] = useContext(myContext)
    const handleSubmit = () =>{
        setContextValue(0)
    }
    return (
        <div>
            <h1>CompE - {contextValue}</h1>
            <button onClick={handleSubmit}>Click Me</button>
            <CompF />
        </div>
    );
};

export default CompE;