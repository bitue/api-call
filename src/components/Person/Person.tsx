import React, { useContext, useState } from 'react';
import Enum from '../Enum/Enum';
import TableData from '../TableData/TableData';

interface IamProps {
    name?:string;
    roll?:number
}


interface Iam {
    name:string;
    roll:number
}





const Person  = (props : IamProps) => {

    const [country , setCountry] = useState<string | number>('') ;
    // const all = useContext<Iam>()
    
    return (
        <div>
            <h1> i love typescript </h1>
            <p> {props.name}</p> 
            <p> {props.roll}</p>

            <input placeholder='enter your country name' onChange={(event) => setCountry(event.target.value) }/>

            {country}
            <p>wellcome enum here</p>

            <Enum enum='loading'></Enum>

            <TableData></TableData>
            
        </div>
    );
};

export default Person;
