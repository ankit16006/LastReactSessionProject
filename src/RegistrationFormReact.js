import React from "react";
import { useState } from "react";
import {NavLink} from 'react-router-dom'

function LoginwithState() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(name + email + password);
    setName("");
    setEmail("")
    setPassword('')
   // alert("Registration Successfully" + name);
   alert(`Registration Successfully ${name}`)
    
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="regiterForm">
        <h2>Registration Page</h2>
        <label className="label">Enter Your Name</label>
        <input type="text" onChange={handleName} value={name} required />
        <br/>
        <label className="label">Enter Your Email</label>
        <input type="email" onChange={handleEmail} value={email} required />
        <br/>
        <label className="label">Enter Your Password</label>
        <input
          type="password"
          onChange={handlePassword}
          value={password}
          required
        />
        <br/>
       
      <NavLink  className="nav-link" to="/success"> <button type="submit">Sign Up</button></NavLink >
     
      </form>
    </div>
  );
}

export default LoginwithState;
