import { APIURL } from "./url";
import axios from "axios";

export function userSignUp(data) {
  return axios.post(`${APIURL}/auth/signup`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function userSignIn(data) {
  return axios.post(`${APIURL}/auth/signin`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
