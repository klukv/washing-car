import { API_URL, API_URL_LOGIN, API_URL_REGISTER } from "../utils/const";
import { $host } from "./auth";

export const signupRequest = async (
  username: string,
  numberMobile: string,
  roles: string[],
  password: string
) => {
  const { data } = await $host.post(API_URL + API_URL_REGISTER, {
    username,
    numberMobile,
    roles,
    password,
  });
  return data;
};

export const signinRequest = async (username: string, password: string) => {
  const { data } = await $host.post(API_URL + API_URL_LOGIN, {
    username,
    password,
  });
  localStorage.setItem("token", data.token)
  return data;
};
