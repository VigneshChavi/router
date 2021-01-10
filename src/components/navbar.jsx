import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';

const NavBar = () => {
  return (  
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">College</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/mission">Mission</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/vision">Vision</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/department" >Department</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/loginform" >Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;