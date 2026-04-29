import { LOCAL_STORAGE_USER_KEY } from "@/features/login/lib/config/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "@/entities/user";

type LoginArgs = {
    email?: string;
    phone?: string;
    password?: string;
};

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
    'features/login',
    async (authData, thunkApi) => {
        try {
            const res = await axios.post('http://localhost:8000/auth/login', authData);
            const user = res.data;
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
            thunkApi.dispatch(userActions.setUserData(user));
            return;

        } catch (error) {
            return thunkApi.rejectWithValue('Login failed');
        }
    }
);
