import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "./userSlice"
import "./EditUser.css";


const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleAddUser = () => {
    setValues({ name: '', email: '', phone: '' });
    dispatch(addUser({
      id: uuidv4(),
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
        value={values.name}
        className="input"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text' }}
      />
      <br />
      <TextField
        label="Email : "
        value={values.email}
        className="input"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email' }}
      />
            <br />
      <TextField
        label="Phone : "
        value={values.phone}
        className="input"
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
        inputProps={{ type: 'text' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser