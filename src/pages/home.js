import React from "react";
import Heading from "./Heading";
import UserList from "./UserList";
import AddUser from "./AddUser";

const Home = () => {
  return (
    <>
      <Heading />
      <AddUser/>
      <UserList />
    </>
  );
};

export default Home;
