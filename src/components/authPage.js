import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";
import {useFormik} from "formik"
import * as yup from "yup"


const authValidation=yup.object({
  email:yup.string().required("Please Enter valid Email"),
  password:yup.string().required("Enter valid password").min(8,"Password should be more than Eight Characters")
})
const AuthPage=()=>{
  const history=useHistory();

const {values,handleChange,handleSubmit,handleBlur,touched,errors}=useFormik({
  initialValues:{
    email:"",
    password:""
  },
  validationSchema:authValidation,
onSubmit:()=>{
  history.push("/home")
}
})

    return(
        <div>
            <div>
                <div className="logo">
                      <img src="https://www.freeiconspng.com/thumbs/harry-potter-logo/harry-potter-logo-transparent-1.png" 
                     alt="hp-logo"></img>
                </div>

                     <h2 className="school-name school-name1">Hogwarts School of Witchcraft and Wizardry 
                    </h2>
            </div>

            

            <div className="auth-logo">
        <img
          src="https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png"
          alt="Hogwarts"
        ></img>
      </div>  
      <div>
              <h6 className="enter-email">Enter Any Email, Password and Submit to Enter Hogwarts School of Witchcraft and Wizardry </h6>
            </div>


        <div>

        

            <Form className="form-auth" onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="email@example.com" 
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}/>
        </Col>
        {touched.email && errors.email?<p style={{color:"red"}}>{errors.email}</p>:""}
        <Form.Text >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" 
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}/>
        </Col>
        {touched.password && errors.password?<p style={{color:"red"}}>{errors.email}</p>:""}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>     
    
    </div>
    
        </div>
    )
}


export default AuthPage