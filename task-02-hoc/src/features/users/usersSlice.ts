import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/root-reducer";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

type userStateType = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
  data: {}[];
};

const initialState: userStateType = {
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  data: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USER_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.data = [...action.payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export const getAllUsers = (state: RootState) => state.users.data;
export const getUsersStatus = (state: RootState) => state.users.status;
export const getUsersError = (state: RootState) => state.users.error;
export const getUserById = (state: RootState, userId: number) =>
  state.users.data.find((user: any) => user.id === userId);

export default usersSlice.reducer;
