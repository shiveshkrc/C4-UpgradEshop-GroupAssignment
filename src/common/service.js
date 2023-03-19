import { APIURL } from "./url";
import axios from "axios";

export function userSignUp(data) {
  axios.post(`${APIURL}/users`, data);
}

export function userSignIn(data) {
  axios.post(`${APIURL}/auth/signin`, data);
}
