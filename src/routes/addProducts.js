import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik} from  "formik";
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';



const formValidationSchema = yup.object({
    company: yup.string().required("Mandatory Field"),
    model : yup.string().required("Mandatory Field"),
    carType :yup.string().required("Mandatory Field")    
  
  });

  export function AddProducts(){

    const{handleSubmit,values,handleBlur,handleChange,errors,touched,resetForm,setFieldValue} = useFormik({
        initialValues :{company:'',model:'',modelyear:new Date(),carType:'',fuelType:''},
        validationSchema : formValidationSchema,
        onSubmit:(newProduct)=>{
            newProduct.modelyear = modelyear.getUTCFullYear();  //to get only year
            console.log('New Product',newProduct)
            resetForm();
        }

    })

   
    const new_style = { width: '25%' };
    const [carType,setCarType] = useState('');
    const [fuelType,setFuelType] = useState('');
    const[modelyear,setModelYear]=useState(new Date())

    const carTypeHandleChange = (event)=>{
        setCarType(event.target.value);
        setFieldValue('carType',event.target.value);
    }

    const fuelTypeHandleChange = (event)=>{
        setFuelType(event.target.value);
        setFieldValue('fuelType',event.target.value);
    }

    const yearHandleChange =(newYearValue) => {
        setModelYear(newYearValue);
        setFieldValue('modelyear',newYearValue);

    }
   

    return(
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
        <form onSubmit={handleSubmit}>
            <div className='addProduct'>
            <div className='addProduct_header'>
                <h1>Add Products</h1>
                <i className="fa-solid fa-file-import fa-xl"></i>
            </div>
            <TextField
                id="company"
                name="company"
                value={values.company}
                onChange={handleChange}
                label="Car Company Name"
                variant="outlined"
                onBlur={handleBlur}
                style={new_style} 
                error={errors.company && touched.company}
                helperText = {errors.company && touched.company ? errors.company : ""}/>

            <TextField
                id="model"
                name="model"
                value={values.model}
                onChange={handleChange}
                label="Model"
                variant="outlined"
                onBlur={handleBlur}
                style={new_style} 
                error={errors.model && touched.model}
                helperText = {errors.model && touched.model ? errors.model : ""}/>
           
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <Stack spacing={3}>
                    <DatePicker
                    id="modelyear"
                    name="modelyear"
                    views={['year']}
                    label="Year "
                    variant="outlined"
                    inputFormat="yyyy"
                    value={modelyear}
                    renderInput={(params) => <TextField {...params}  />}
                    onChange={yearHandleChange}
                    onBlur={handleBlur}
                    style={new_style} 
                    error={errors.modelyear && touched.modelyear}
                     helperText = {errors.modelyear && touched.modelyear ? errors.modelyear : ""}
                   />
                </Stack>
            </LocalizationProvider>
            <FormControl style={new_style}>

                <InputLabel id="carType">Car Type</InputLabel>
                <Select
                    labelId="carType"
                    id="carType"
                    value={carType}
                    label="Car Type"
                    name="carType"
                    onChange={carTypeHandleChange}
                    onBlur={handleBlur}
                    error={errors.carType && touched.carType}
                    
                >
                
                    <MenuItem value={'Hatch back'}>Hatch back</MenuItem>
                    <MenuItem value={'Sedan'}>Sedan</MenuItem>
                    <MenuItem value={'SUV'}>SUV</MenuItem>
                </Select>
              <FormHelperText>{errors.carType &&touched.carType ? errors.carType : ""}</FormHelperText>
            </FormControl>

            <FormControl style={new_style}>
              <InputLabel id="division">Division</InputLabel>
              <Select
                labelId="fuelType"
                id="fuelType"
                value={fuelType}
                label="Fuel Type"
                name="fuelType"
                onChange={fuelTypeHandleChange}
                onBlur={handleBlur}
                // style={new_style} 
                error={errors.fuelType && touched.fuelType}
              >
                <MenuItem value={'Petrol'}>Petrol</MenuItem>
                <MenuItem value={'Diesel'}>Diesel</MenuItem>
              </Select>
              <FormHelperText>{errors.fuelType && touched.fuelType ? errors.fuelType : ""}</FormHelperText>
            </FormControl>

                {/* Using button from Material  */}
            <Button variant="contained" type="submit" style={new_style} className="formButton">Add Product</Button>
            </div>
        </form>
    </Box>

    )
}