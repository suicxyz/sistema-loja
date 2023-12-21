"use client"

import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";

import { retrieveUserInfo, signInRequest } from "@/services/auth";
import { useRouter } from "next/navigation";

import Axios from "@/services/axios";

export type User = {
  name: String;
  username: String;
  phonenumber: String;
  role: String;
}

type SignInData = {
  username: String;
  password: String;
}

type AuthContextType = {
  user: User;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = !!user;

  const router = useRouter();

  useEffect(() => {
    const { "hspap.token" : token } = parseCookies();

    if (token) {
      retrieveUserInfo().then((response) => {
        // @ts-ignore
        setUser(response.user);
      });
    }
   }, []);

  async function signIn({ username, password }: SignInData) {
    const { user, token } = await signInRequest({ username, password });

    setCookie(undefined, "hspap.token", token, 
    {
      maxAge: 60*60*12
    });

    setUser(user);

    Axios.defaults.headers["Authorization"] = `Bearer ${token}`;

    router.push("/app")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      { children }
    </AuthContext.Provider>
  )
}