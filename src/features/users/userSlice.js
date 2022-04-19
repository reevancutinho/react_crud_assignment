import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id:"3031bb2c-b6eb-42a3-972a-47dac6cd9e93",
    name:"Reevan",
    email:"reevan@gmail.com",
    phone:"9837273998"
  },
  {
    id:"f467be68-3d9d-4eb5-98dd-194c63b7c184",
    name:"Cutinho",
    email:"cutinho@gmail.com",
    phone:"9837263847"
  },
  {
    id:"a76e0701-e805-4461-b918-1f9302889e71",
    name:"Chris",
    email:"chris@gmail.com",
    phone:"9982736541"
  },
  {
    id:"39103987-b7b2-4c3e-9d52-aef8323a9e7b",
    name:"Rex",
    email:"rex@gmail.com",
    phone:"7856393746"
  }
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.phone = phone;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
