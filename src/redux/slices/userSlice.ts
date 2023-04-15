import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TUser = {
  id: number | undefined;
  username: string;
  numberMobile: string;
  roles: string[];
  isAuth?: boolean;
};

interface IUserState {
  user: TUser;
}

const initialState: IUserState = {
  user: {
    id: undefined,
    username: "",
    numberMobile: "",
    roles: [],
    isAuth: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload;
    },
    logout: () => {},
  },
});

export const { createUser, setIsAuth, logout } = userSlice.actions;

export default userSlice.reducer;
