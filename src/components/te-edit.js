import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BasePage from "./base";
import { Button, TextField } from '@mui/material';
import {useFormik} from "formik"
import * as yup from "yup"


const studentAddValidation=yup.object({
  birth:yup.string().required("Please Enter Birth Date"),
  gender:yup.string().required("Please Enter Gender"),
  house:yup.string().required("Please Enter Your House Name"),
  image:yup.string().required("Please Enter an image"),
  name:yup.string().required("Please Enter Your Name"),
  species:yup.string().required("Please Enter Species"),
  wand:yup.string().required("Please Enter Wand")
})

const EditStaff=({staffsData,setStaffsData})=>{
    const history=useHistory();
    const {id}=useParams();
    const staff=staffsData[id];
    const [editId,setEditId]=useState("")
   
    const {values,handleChange,handleSubmit,handleBlur,touched,errors}=useFormik({

        initialValues:{
          name:"",
          species:"",
          gender:"",
          house:"",
          birth:"",
          wand:"",
          image:""
        },
        validationSchema:studentAddValidation,
        onSubmit:(editedStaff)=>{
            updateStaff(editedStaff)
        }
      })
    useEffect(()=>{
        setEditId(staff.id);
    
    },[])

    const updateStaff=async (editedStaff)=>{

        try {
            

    
            const response=await fetch(`https://63ae58f2ceaabafcf177e2b6.mockapi.io/Staffs/${editId}`,{
                method:"PUT",
                body:JSON.stringify(editedStaff),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const data=await response.json();

            const staffIndex=staffsData.findIndex((staff)=>staff.id===editId)
            staffsData[staffIndex]=data;
    
            setStaffsData([...staffsData])
    
            
        history.push("/staffs") 
        } catch (error) {
            console.log("error")
        }
        
    }

    return(
        <BasePage
        title = "Edit Staff Data Here"
        description= "You can a Edit and Update staff's data here"
        >
        
        <div className="input-section">
     
        
     <form onSubmit={handleSubmit}>
      <TextField 
      fullWidth 
      label="Enter the Name"
      onChange={handleChange}
      onBlur={handleBlur}
      value= {values.name}
      name="name"
       id="fullWidth" />
       {touched.name && errors.name?<p style={{color:"red"}}>{errors.name}</p>:""}
 
      <TextField 
      fullWidth 
      label="Enter the Species"
      onChange={handleChange}
      
      onBlur={handleBlur}
      value = {values.species}
      name="species"
       id="fullWidth" />
        {touched.species && errors.species?<p style={{color:"red"}}>{errors.species}</p>:""}
 
      <TextField 
      fullWidth 
      label="Enter the Gender"
      onChange={handleChange}
      value = {values.gender}
      onBlur={handleBlur}
      name="gender"
       id="fullWidth" />
       {touched.gender && errors.gender?<p style={{color:"red"}}>{errors.gender}</p>:""}
 
      <TextField 
      fullWidth 
      label="Enter the House"
      onChange={handleChange}
      value = {values.house}
      onBlur={handleBlur}
      name="house"
       id="fullWidth" />
 {touched.house && errors.house?<p style={{color:"red"}}>{errors.house}</p>:""}
 
 <TextField 
      fullWidth 
      label="Enter Date of Birth"
      onChange={handleChange}
      value = {values.birth}
      onBlur={handleBlur}
      name="birth"
       id="fullWidth" />
 {touched.birth && errors.birth?<p style={{color:"red"}}>{errors.birth}</p>:""}
 
 <TextField 
      fullWidth 
      label="Enter the Wand Type"
      onChange={handleChange}
      value = {values.wand}
      onBlur={handleBlur}
      name="wand"
       id="fullWidth" />
 {touched.wand && errors.wand?<p style={{color:"red"}}>{errors.wand}</p>:""}
 
 <TextField 
      fullWidth 
      label="Enter a Image"
      onChange={handleChange}
      value = {values.image}
      onBlur={handleBlur}
      name="image"
       id="fullWidth" />
 {touched.image && errors.image?<p style={{color:"red"}}>{errors.image}</p>:""} 
         
         <Button
           className="add-btn"
           color="secondary"
           variant="contained"
           type="sumbit"
         >
           Update Staff Data
         </Button>
         </form>
         </div>

        </BasePage>
    )
}



export default EditStaff