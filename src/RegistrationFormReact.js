import React, { useState } from 'react'
import Success from './Success';


// import {useNavigate} from "react-router-dom";

const RegistrationFormReact = () => {
    // const navigate  = useNavigate();
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
      
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone}
     my email is ${data.email} Here is what T want to say ${data.msg}`)

    }

    return (
        < div className='form'>

            <div className="my-5">
                <h1 className="text-center">Registration Form</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="form-label">FullName:</label>
                                <input style={{ marginLeft: "120px" }} type="text" className="form-control" id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter you name" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Mobile:</label>
                                <input style={{ marginLeft: "150px" }} type="number" className="form-control" id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile number" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address:</label>
                                <input style={{ marginLeft: "60px" }} type="email" className="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="seacode@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Password:</label>
                                <input style={{ marginLeft: "120px" }} type="password" className="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="seacode@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Confirm Password:</label>
                                <input style={{ marginLeft: "8px" }} type="password" className="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="example@example.com" required />
                            </div>
                            <div className="col-12">
                              
                               <button className="btn btn-outline-primary" type="submit" >Submit</button>
                       
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
};


export default RegistrationFormReact;