import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types/types";

const initialState: UserState = {
    user: {
        address: null,
        balance: null
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser(state, action: PayloadAction<User>) {
            state.user = {
                address: action.payload.address,
                balance: action.payload.balance
            };
        }
    }
});

export const userReducer = userSlice.reducer;
export const { changeUser } = userSlice.actions;
