import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const columns: GridColDef[] = [

    {
      field: 'email',
      headerName: 'email',
      type: 'string',
      width: 190,
    },
    {
      field: 'name',
      headerName: 'name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
   
    },
  ];
interface userType {
    name:string;
    email:string
}

function getEndpoint(path:string) {
  return ; // finish implementing this
}
const TableData = () => {

    const [user , setUser] = useState<userType[]>([])

    

 


    useEffect(()=> {
      function getAlerts() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(result => result.json())
          .then(result => {

            // const newUsers = [...user, ...result];

            // setUser(newUsers)
            setUser((prev)=> ([...prev, ...result]))
            // console.log(,'inside')
          })
      }
     
      getAlerts()
      const interval = setInterval(() => getAlerts(), 5000)
   
      return () => {
        clearInterval(interval);
      }

    },[])

    console.log(user,'outside')
   
    return (
      <>
     
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={user}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
        </>
      );
};

export default TableData;