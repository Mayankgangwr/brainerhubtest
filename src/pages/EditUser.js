import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editUser } from "../redux/action";
const EditUser = () => {
  const [selectedName, setSelectedName] = useState({ id: "", name: "" });
  const dispatch = useDispatch();
  const params = useParams();
  const users = useSelector((state) => state.addReducer.users);
  const currentId = params.id;

  const nameChangeHandler = (event) => {
    setSelectedName({ ...selectedName, name: event.target.value });
  };
  const history = useNavigate();
  const onSubmitHandler = () => {
    dispatch(editUser(selectedName));
    history("/");
  };

  useEffect(() => {
    const userDetail = users.find((user) => user.id === currentId);
    setSelectedName(userDetail);
  }, [currentId, users]);
  return (
    <form onSubmit={onSubmitHandler} style={{margin:'35px'}}>
      <div className="input-group">
      <span class="input-group-text">Name</span>
        <input
          type="text"
          className="form-control"
          onChange={nameChangeHandler}
          name="name"
          value={selectedName.name}          
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
export default EditUser;
