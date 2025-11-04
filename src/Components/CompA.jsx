import React, { useContext } from 'react';
import { myContext } from '../App';

const CompA = () => {
    const [contextValue, setContextValue] = useContext(myContext)
     
    const handleSubmit = () =>{
        setContextValue(val=>val+1)
    }

    return (
        <div>
            <h1>CompA - {contextValue}</h1>
            <button onClick={handleSubmit}>Click Me</button>
        </div>
    );
};

export default CompA;