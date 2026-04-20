import {
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from "@reduxjs/toolkit";

import { userReducer } from "@/entities/user";
import { type StateSchema } from "./StateSchema";
import { loginReducer } from "@/features/login";

export const createStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      user: userReducer,
      loginForm: loginReducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  });
};


export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;