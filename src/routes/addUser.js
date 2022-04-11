// Function to display the form and to collect the data

import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from  "formik";
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { userData } from '../globalData';
import { UserTable } from './userTable';
import {useHistory} from 'react-router-dom';
import { StudentContext } from '../App';




const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const formValidationSchema = yup.object({
    fName: yup.string().required("Mandatory Field"),
    lName : yup.string().required("Mandatory Field"),
    city : yup.string().required("Mandatory Field"),
    phone :yup.string().required("required").matches(phoneRegExp, 'Phone number is not valid').min(10, "to short").max(10, "to long"),
    email: yup.string()
                .min(5,"Minimum length of email should be 5 chars")
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid Email Address")
                .required("Mandatory field"),
  
  });


export function AddUser(){
    const history = useHistory();
    const {uservalue,setUserValue}= useContext(StudentContext);
    const{handleSubmit,values,handleBlur,handleChange,errors,touched,resetForm} = useFormik({
        initialValues :{fName:'',lName:'',city:'',phone:'',email:''},
        validationSchema : formValidationSchema,
        onSubmit:(newUser)=>{
            console.log('New User',newUser)
            setUserValue([...uservalue,newUser]);
            <UserTable uservalue={uservalue} />
            history.push('/userTable')
            resetForm();
        }

    })

   
    const new_style = { width: '25%' };

    return(
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
        <form onSubmit={handleSubmit}>
            <div className='addUser'>
            <div className='addUser_header'>
                <h1>Add User</h1>
                <i class="fa-regular fa-address-card fa-xl"></i>
            </div>
            <TextField
                id="fName"
                name="fName"
                value={values.fName}
                onChange={handleChange}
                label="First Name"
                variant="outlined"
                onBlur={handleBlur}
                style={new_style} 
                error={errors.fName && touched.fName}
                helperText = {errors.fName && touched.fName ? errors.fName : ""}/>

            <TextField
                id="lName"
                name="lName"
                value={values.lName}
                onChange={handleChange}
                label="Last name"
                variant="outlined"
                onBlur={handleBlur}
                style={new_style} 
                error={errors.lName && touched.lName}
                helperText = {errors.lName && touched.lName ? errors.lName : ""}/>
            <TextField
                id="city"
                name="city"
                value={values.city}
                onChange={handleChange}
                label="City"
                variant="outlined"
                onBlur={handleBlur}
                style={new_style} 
                error={errors.city && touched.city}
                helperText = {errors.city && touched.city ? errors.city : ""}/>

            <TextField
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                label="Phone"
                variant="outlined"
                onBlur={handleBlur}
                style={new_style} 
                error={errors.phone && touched.phone}
                helperText = {errors.phone && touched.phone ? errors.phone : ""}/>

            <TextField
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                label="Email ID"
                variant="outlined"
                onBlur={handleBlur}
                style={new_style} 
                error={errors.email && touched.email}
                helperText = {errors.email && touched.email ? errors.email : ""}/>

                {/* Using button from Material  */}
            <Button variant="contained" type="submit" style={new_style} className="formButton">Add User</Button>
            </div>
        </form>
    </Box>

    )
}