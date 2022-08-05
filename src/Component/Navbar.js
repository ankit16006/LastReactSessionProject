import React from 'react'
import { NavLink } from 'react-router-dom'
import Loading from './Loding'

function Navbar() {
  return (
    <div>
     
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/about">About</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/contact">Contact</NavLink >
        </li>
        
      </ul>
      <li className="nav-item d-flex" style={{marginRight:"40%"}}>
      <Loading />
      </li>
     
      <li className="nav-item d-flex">
          <NavLink className="nav-link" to="/register">Registration</NavLink>
        </li>
   
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar