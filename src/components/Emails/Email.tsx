import React, { useEffect, useState } from 'react';

interface userInfo {
    name:string,
    email:string
}

const Email = () => {
    const [users, setUsers] = useState<userInfo[]>([]);

    

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUsers(data)
        })
    },[])
    return (
        <div>
            {
                users.map(ele  => <p>{ele.name}</p>)
            }

            
        </div>
    );
};

export default Email;