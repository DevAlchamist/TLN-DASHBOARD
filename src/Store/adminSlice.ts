// src/features/users/adminSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the type for a user
export type User = {
  id: number;
  username: string;
  email: string;
  class: string;
  createdAt: string;
  updatedAt: string;
  password: string;
  role: "SuperAdmin" | "Admin" | "User";
  // Add other user properties as needed
};

// Define the state type for the users slice
type UsersState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  usersInfo: User[] | null;
  AllUsers: User[] | null;
  UserById: User[] | null;
};

// Define the initial state
const initialState: UsersState = {
  status: "idle",
  error: null,
  usersInfo: [],
  AllUsers: [],
  UserById: [],
};

// Create the async thunk for fetching users
// export const getUsersAsync = createAsyncThunk(
//   "users/getUsers",
//   async (userToken: string) => {
//     const response = await userServices.getUsers(userToken); // Adjust the endpoint as necessary
//     if (!response) {
//       throw new Error("No data received from the API");
//     }
//     return response;
//   }
// );

// Create the users slice
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
    //   .addCase(getUsersAsync.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(getUsersAsync.fulfilled, (state: RootState, action) => {
    //     state.usersInfo = action.payload;
    //     state.status = "succeeded";
    //   })
    //   .addCase(getUsersAsync.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message || "An error occurred";
    //   })
  },
});

// export const selectGetUser = (state: RootState) => state.user.usersInfo;

export default adminSlice.reducer;
