import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import { removeUser } from "../redux/action";
const UserList = () => {
  const users = useSelector((state) => state.addReducer.users);
  const dispatch = useDispatch();
  return (
    <ul style={{ marginTop: "20px" }}>
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <li className="d-flex my-2 mx-2" key={user.id}>
              <strong>{user.name}</strong>
              <div style={{ marginLeft: "auto" }}>
                <div className="btn-group">
                  <Link to={`/edit/${user.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <Button
                    onClick={() => dispatch(removeUser(user.id))}
                    color="danger"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </>
      ) : (
        <h4 className="text-center">No record</h4>
      )}
    </ul>
  );
};
export default UserList;
