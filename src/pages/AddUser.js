import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addUser } from "../redux/action";
const AddUser = () => {
  const [name, setName] = useState({ id: "", name: "" });
  const dispatch = useDispatch();
  const nameChangeHandler = (event) => {
    setName({ id: uuid(), name: event.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(name));
    setName({ id: "", name: "" });
  };
  return (
    <form onSubmit={onSubmitHandler} style={{margin:'35px'}}>
      <div className="input-group">
      <span class="input-group-text">Name</span>
        <input
          type="text"
          className="form-control"
          onChange={nameChangeHandler}
          name="name"
          value={name.name}          
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ marginTop: "5px" }}>
        Submit
      </button>
      <Link
        to="/"
        className="btn btn-danger"
        style={{ marginLeft: "5px", marginTop: "5px" }}
      >
        Cancel
      </Link>
    </form>
  );
};

export default AddUser;
