import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
return(
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className=" col-10 mx-auto">

            
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">xenz</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/" className={(isActive) => (isActive ? "active-style" : 'null')}>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about" className={(isActive) => (isActive ? "active-style" : 'null')}>About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/service" className={(isActive) => (isActive ? "active-style" : 'null')}>Service</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contact" className={(isActive) => (isActive ? "active-style" : 'null')}>Contact</NavLink>
        </li>
    
      </ul>
    
    </div>
  </div>
</nav>
</div>
        </div>
    </div>
    </>
)



}
export default Navbar;