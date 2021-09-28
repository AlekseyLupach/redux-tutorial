import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "http://localhost:5500/api/users/123/update",
    user
  );
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "anna",
      email: "anna@example.com",
    },
    pending: "",
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null;
      state.userInfo = true;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;

//API SLICE
// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {
//       name: "anna",
//       email: "anna@example.com",
//     },
//     pending: "",
//     error: false,
//   },
//   reducers: {
//     updateStart: (state) => {
//       state.pending = true;
//     },
//     updateSuccess: (state, action) => {
//       state.pending = false;
//       state.userInfo = action.payload;
//     },
//     updateError: (state) => {
//       state.error = true;
//       state.pending = null;
//     },
//   },
// });

// export const { updateStart, updateSuccess, updateError } = userSlice.actions;
// export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     name: "anna",
//     email: "anna@example.com",
//   },
//   reducers: {
//     update: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//     },
//     remove: (state, action) => (state = {}),
//     addHello: (state, action) => {
//       state.name = "Hello " + action.payload.name;
//     },
//   },
// });

// export const { update, remove, addHello } = userSlice.actions;
// export default userSlice.reducer;
