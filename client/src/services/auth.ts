import Axios from "./axios";
import type { User } from "@/contexts/AuthContext";

type SignInRequestData = {
  username: String;
  password: String;
}

type SignInRequestResponse = {
  user: User;
  token: any;
}

export async function signInRequest({ username, password }: SignInRequestData): Promise<SignInRequestResponse> {
  return Axios.post("/api/auth",
    { username, password })
    .then(
      (response) => response.data
    );
}

export async function retrieveUserInfo(): Promise<User> {
  return Axios.get("/api/auth/").then((response) => response.data);
}