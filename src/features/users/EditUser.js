import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"
import "./EditUser.css";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, email, phone } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
    phone
  });

  const handleEditUser = () => {
    setValues({ name: '', email: '', phone: ''});
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email, 
      phone: values.phone 
    }));
    navigate('/');
  }

  return (
    <div className="edit-user-container">
      <TextField
        label="Name : "
        className="input"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text" }}
      />
      <br />
      <TextField
        label="Email :"
        className="input"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email" }}
      />
      <br />
      <TextField
        label="Phone :"
        className="input"
        value={values.phone}
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
        inputProps={{ type: "text" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
}

export default EditUser