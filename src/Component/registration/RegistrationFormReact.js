import React from "react";
import { useState } from "react";
// import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './Registration.css'
import axios from 'axios';

function LoginwithState() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [successMsg,setSuccessMsg] = useState('')
const [error, setError] = useState('');
// const [nameErr,setNameErr] = useState("")
// const [emailErr, setEmailErr] = useState("");
// const [passErr, setPassErr] = useState("");
  const header = {"Access-Control-Allow-Origin":"*"}
  const handleName = (e) => {
    
    setSuccessMsg('')
    // setNameErr('')
    setError('')
    setName(e.target.value);
  
  };
  const handleEmail = (e) => {
    setSuccessMsg('')
    // setEmailErr('')
    setError('')
    setEmail(e.target.value);
    
 
    
  };
  const handlePassword = (e) => {
    setSuccessMsg('')
    // setPassErr('')
    setError('')
 
    
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://62e7aa8f0e5d74566af95e94.mockapi.io/create/react-crud",{
      name:name,
      email:email,
      password:password,
      header,
    })

    // if(name!==''){

    // }else{
    //   setNameErr("name is required.")
    // }
    // if(email!==''){

    // }else{
    //   setEmailErr("email is required.")
    // }
    // if(password!==''){

    // }else{
    //   setPassErr("password is required.")
    // }
    // -------------------------------------------------------------------------------
    if (name === '' || email === '' || password === '') {
      setError("all Field are required...");
      } else {
      
      // setError(false);
      navigate('/login')
      }
  //     setEmail("")
  //     setName("")
  //     setPassword("")
  //   // console.log(name + email + password);
  //   // setName("");
  //   // setEmail("")
  //   // setPassword('')
  //  // alert("Registration Successfully" + name);
 
   
  };


  return (
    <div>

    <div className="container">
  
      <form onSubmit={submitHandler} className="regiterForm">
        <h2>Registration Page</h2>
        <label className="label">Enter Your Name</label>
        <input type="text" onChange={handleName} value={name}  />
        {/* <br/> */}
        {/* {nameErr&&<div className="err-msg">{nameErr}</div> } */}
        {error&&<div className="err-msg">{error}</div> }
        <label className="label">Enter Your Email</label>
        <input type="email" onChange={handleEmail} value={email} />
        {/* <br/> */}
        {/* {emailErr&&<div className="err-msg">{emailErr}</div> } */}
        {error&&<div className="err-msg">{error}</div> }
        <label className="label">Enter Your Password</label>
        <input
          type="password"
          onChange={handlePassword}
          value={password}
        
        />
        {/* <br/> */}
        {/* {passErr&&<div className="err-msg">{passErr}</div> } */}
        {error&&<div className="err-msg">{error}</div> }
        <div className="already">
          <h4 style={{
            paddingTop:"10px",
            paddingLeft:"70px",
            fontSize:"16px"
          }}>Already have an account? <a href={'./login'}>Login</a></h4> 
        </div>
       
       <button type="submit">Sign Up</button>
     
      </form>
    </div>
    </div>
  );
}

export default LoginwithState;
