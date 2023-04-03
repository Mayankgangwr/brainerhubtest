import "./styles.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import AddUser from "./pages/AddUser"; 
import EditUser from "./pages/EditUser";
import Privateroute from "./pages/privateroute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Privateroute />}>
          <Route index element={<Home />} exact />
          <Route path="/add" element={<AddUser />} exact />
          <Route path="/edit/:id" element={<EditUser />} exact />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
