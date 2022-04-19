import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";
import "../../components/Button.css";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
    console.log(id);
  }

  const renderCard = () => users.map(user => (
    <div className="card" key={user.id}>
      <div>
        <h3 className="">{user.name}</h3>
        <span className="">{user.email}</span><br />
        <span className="">{user.phone}</span>
      </div>
      <div className="">
        <Link to={`edit-user/${user.id}`}>
          <button className="edit-btn">Edit
          </button>
        </Link>
        <button className="remove-btn"
          onClick={() => handleRemoveUser(user.id)}
        >Remove
        </button>
      </div>
    </div>
  ))

  return (
    <div className="container">
      <Link to="/add-user" className="btn"><Button className="buttn">ADD USER</Button></Link>
      <div className="cardlist">
        {users.length ? renderCard() : <p className="">No User</p>}
      </div>
    </div>
  )
}

export default UserList