import { Outlet, Navigate } from "react-router-dom";
import React, { useEffect } from "react";

const PrivateRoute = () => {
  // useEffect(() => {
  //   if (localStorage.getItem("userid") !== null) {
  //     auth.token = true;
  //   }
  // }, []);
  return localStorage.getItem("userid") !== null &&
    localStorage.getItem("username") !== null &&
    localStorage.getItem("loginid") !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
