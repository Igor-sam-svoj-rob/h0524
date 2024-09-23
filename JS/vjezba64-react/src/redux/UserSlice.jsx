import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: "1",
      ime: "Igor",
      email: "example@example.com",
    },
    {
      id: "2",
      ime: "Ivan",
      email: "test@test.com",
    },
  ],

  reducers: {
    addUser: (state) => {},
    editUser: (state) => {},
    deleteUser: (state) => {},
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
