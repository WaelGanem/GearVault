import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../types/UserData";

export interface UserState {
  user: UserData | null;
}

const initialState: UserState = {
    user: null,
}; 

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<Partial<UserData>>) => {
        if (state.user) {
          state.user = { ...state.user, ...action.payload };
        } else {
          state.user = action.payload as UserData;
        }
      },
      clearUser: (state) => {
        state.user = null;
      },
    },
  });