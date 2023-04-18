import { Trecords } from "./slices/serviceSlice";
import { RootState } from "./store";

export const selectUsername = ({ userSlice }: RootState) => userSlice.user.username;
export const selectUserID = ({ userSlice }: RootState) => userSlice.user.id;
export const selectIsAuth = ({userSlice}: RootState) => userSlice.user.isAuth;
export const selectRoleUser = ({userSlice}: RootState) => userSlice.user.roles;
export const selectService = ({serviceSlice}:RootState) => serviceSlice.service;
export const selectAllRecords = ({serviceSlice}:RootState):Trecords[] => serviceSlice.allServices;
