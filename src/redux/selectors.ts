import { RootState } from "./store";

export const selectUsername = ({ userSlice }: RootState) => userSlice.user.username;
export const selectIsAuth = ({userSlice}: RootState) => userSlice.user.isAuth;
