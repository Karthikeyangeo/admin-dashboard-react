import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { userData } from '../globalData';
import { string } from 'yup';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fName', headerName: 'First name', width: 130 },
  { field: 'lName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.fName || ''} ${params.row.lName || ''}`
  },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'phone', headerName: 'Phone No',width: 130 },
  { field: 'email', headerName: 'Email ID', width: 130 ,flex:1},
   
];



 function UserTable() {
    const [uservalue,setUserValue]= React.useState(userData)
    //for providing id for the table based on the index value
    for(let i=0;i<uservalue.length;i++){
        uservalue[i].id=i+1;
    }

    
    return (
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', m:3,mt:15 }}
        >
            <div style={{ height: 400, width: '100%'}}>
            <DataGrid
                rows={uservalue}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                
            />
            </div>
        </Box>
    );
}


export {UserTable}