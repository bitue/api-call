import React , {ChangeEvent, FC, useState} from 'react';


interface personListProps {
    user: {
        name:string;
        roll: number;
    }[]
}




const Use = (props : personListProps) => {
    console.log(props)

    const [name, setName] = useState <string | null>(null) ;
    const handleClick = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)

    }
    return (
        <div>

            <input placeholder='enter your name' onChange={handleClick}></input>
           <h1>Hiiiiiiiiiii    {name}</h1>
           <div>
               {
                   props.user.map(ele=> <p>{ele.name}</p>)
               }
           </div>
            
        </div>
    );
};

export default Use;