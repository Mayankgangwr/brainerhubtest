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
          <div className="dropdown ms-auto mt-1 d-mobile">
            <a
              className="text-reset me-2 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink2"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-search"></i>
            </a>
            <ul
              style={{ width: "300px" }}
              className="dropdown-menu dropdown-menu-end mt-2  bg-dark"
              aria-labelledby="navbarDropdownMenuLink2"
            >
              <li className="nav-item">

              </li>
            </ul>
          </div>
          <div className="dropdown ms-3 mt-1 d-mobile">
            <a
              className="text-reset me-2 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bars"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end  bg-dark"
              aria-labelledby="navbarDropdownMenuLink"
            >
            <li className="nav-item text-light">
                    <button className="btn btn-danger" onClick={Logout}>Logout</button>
                </li>
            </ul>
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
