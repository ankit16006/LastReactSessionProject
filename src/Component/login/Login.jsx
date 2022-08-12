import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showList, deleteList } from '../../action/action'


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data,setData] = useState('')
    // const [successMsg,setSuccessMsg] = useState('')
    const [error, setError] = useState('');
    const disptch = useDispatch()
  
//     const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

  const header = {"Access-Control-Allow-Origin":"*"}

  const handleEmail = (e) => {
    setError('')
    setEmail(e.target.value);
    // setSubmitted(false);
  };
  const handlePassword = (e) => {
    setError('')
    setPassword(e.target.value);
    // setSubmitted(false);
  };

  const submitHandler = (e)  => {
    e.preventDefault();
   
  axios.get("https://62e7aa8f0e5d74566af95e94.mockapi.io/create/react-crud")
    .then((Response) =>{
        // console.log(Response.data);
        setData(Response.data)
        
    })
    disptch(showList(email,password))
    // console.log(item);
    // setData(item)
    {
   data.map((eachdata) =>{
  
    
    if (email == eachdata.email && password == eachdata.password) {
        //   setError(true);
        // setSubmitted(true);
   
        alert("Login Successfully...")
        navigate('/tablelist')
          } else {
              setError("plz check the Email and Password");
        //   setSubmitted(true);
        //   setError(false);
        //   alert("Plz Check Details..")
        //   navigate('/')
          }
         

        //   setEmail("")
        //   setPassword("")
    
   })
}
    
  };
  return (
    <div className="logincontainer">
  
      <form onSubmit={submitHandler} className="loginForm">
        <h2>Login Page</h2>
        
        <label className="label">Enter Your Email</label>
        <input type="email" onChange={handleEmail} value={email}  />
        <br/>
        {error&&<div className='err-msg'>{error}</div>}
        <label className="label">Enter Your Password</label>
        <input
          type="password"
          onChange={handlePassword}
          value={password}
         
        />
        <br/>
        {error&&<div className='err-msg'>{error}</div>}
        <div className="already">
          <h4 style={{
            paddingTop:"10px",
            paddingLeft:"55px",
            fontSize:"16px"
          }}>Don't have an account? <a href="/register">Register here</a></h4> 
        </div>
       
       <button type="submit">Login</button>
     
      </form>
    </div>
  )
}

export default Login