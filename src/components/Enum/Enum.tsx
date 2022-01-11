import React from 'react';
import Email from '../Emails/Email';


interface enumProps {
    enum:string
}

const Enum = (props : enumProps) => {
   
    return (
        <div>
            {
                props.enum ==='loading' ? <p>wellcome boss {props.enum}</p> : <p>not wellcome at all</p>
            }

            <Email></Email>
            
        </div>
    );
};

export default Enum;