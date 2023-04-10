import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
const Heading = () => {
    const navigate = useNavigate();
  const Logout = () =>{
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    localStorage.removeItem('loginid');
    if(localStorage.getItem("userid") !== null &&
    localStorage.getItem("username") !== null &&
    localStorage.getItem("loginid") !== null){
      
    }else{
      navigate('/login');
    }

  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 m-pading">
        <div className="container-fluid">
          <a className="navbar-brand mt-2 mt-lg-0 d-mobile logo-6" href="/">
            <h6>
              <span>Bainer</span>Hub
            </h6>
          </a>
          <div className="ms-3 mt-1 d-mobile">
              <button className="btn btn-danger" onClick={Logout}>Logout</button>
          </div>
          <div
            className="collapse navbar-collapse d-desktop"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand mt-2 mt-lg-0 logo-6" href="/">
              <h6>
              <span>Bainer</span>Hub
              </h6>
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item text-light">
                <button className="btn btn-danger" onClick={Logout}>Logout</button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Heading;
