import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user from "../user";

const Login = () => {
  const navigate = useNavigate();

  const [logins, setLogins] = useState({
    username: "",
    password: "",
  });
  const handleChnage = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setLogins({ ...logins, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username: "kminchelle",
    //     password: "0lelplR",
    //     // expiresInMins: 60, // optional
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.id);
    //     const name = `${res.firstName} ${res.lastName}`;
    //     window.localStorage.setItem("userid", res.id);
    //     window.localStorage.setItem("username", name);
    //     window.localStorage.setItem("loginid", res.username);
    //     setLogins({ username: "", password: "" });
    //     navigate("/");
    //   });
    const userdt = user.filter(
      (item) =>
        item.username == logins.username && item.password == logins.password
    );
    if (
      userdt[0].username == logins.username &&
      userdt[0].password == logins.password
    ) {
      window.localStorage.setItem("userid", userdt[0].id);
      window.localStorage.setItem("username", userdt[0].name);
      window.localStorage.setItem("loginid", userdt[0].username);
      setLogins({ username: "", password: "" });
      navigate("/");
    } else {
      alert("Invalid Details");
    }
  };
  return (
    <div class="main" id="login">
      <h1 class="title">Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div class="input-box">
          <input
            type="text"
            class="form-field"
            name="username"
            value={logins.username}
            onChange={handleChnage}
            placeholder="Enter Username"
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            name="password"
            value={logins.password}
            onChange={handleChnage}
            class="form-field"
            placeholder="Enter Password"
          />
        </div>

        <div class="input-box">
          <button class="form-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
