import React, { useContext } from 'react';
import { myContext } from '../App';
import CompE from './CompE';

const CompB = () => {
     const {contextValue, setContextValue} = useContext(myContext)

     const handleSubmit = () =>{
        setContextValue(val=>val-1)
    }

    return (
        <div>
             <h1>CompB - {contextValue}</h1>
            <button onClick={handleSubmit}>Click Me</button>
            <CompE />
        </div>
    );
};

export default CompB;