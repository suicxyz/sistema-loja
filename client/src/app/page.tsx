"use client";

import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaLock, FaUser, FaSignInAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { parseCookies } from 'nookies';

import { AuthContext } from "@/contexts/AuthContext";

export default function Home() {

  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

	const [userColor, setUserColor] = useState("text-neutral-500");
	const [lockColor, setLockColor] = useState("text-neutral-500");

	const router = useRouter();

	useEffect(() => {
		const { "hspap.token" : token } = parseCookies();

		if (token) router.replace("/app");
	}, []);

  async function handleSignIn(data: any) {
    await signIn(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <form className="bg-neutral-50 p-10 rounded-sm shadow-2xl" onSubmit={handleSubmit(handleSignIn)}>
				<h2 className="text-4xl text-neutral-900 font-semibold mb-5 text-center">Acesse o sistema</h2>
				<div className="my-5">
					<label htmlFor="username" className="text-base text-neutral-500">Nome de usuário ou telefone.</label>
					<div className="relative mt-2">
						<input
							{...register("username")}
							type="text"
							id="username"
							name="username"
							className="transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 pl-5 min-w-full h-12 focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150"
							onFocus={() => setUserColor("text-neutral-900")}
							onBlur={() => setUserColor("text-neutral-500")}
						/>
						<FaUser className={`${userColor} transition text-xl absolute right-5 top-3`}/>
					</div>
				</div>
				<div className="my-5">
					<label htmlFor="password" className="text-base text-neutral-500">Senha.</label>
					<div className="relative mt-2">
						<input
							{...register("password")}
							type="password"
							id="password"
							name="password"
							className="transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 pl-5 min-w-full h-12 focus:text-neutral-900 focus:border-neutral-900"
							onFocus={() => setLockColor("text-neutral-900")}
							onBlur={() => setLockColor("text-neutral-500")}
						/>
						<FaLock className={`${lockColor} transition text-2xl absolute right-5 top-3`}/>
					</div>
				</div>
				<button type="submit" className="relative bg-neutral-800 text-neutral-50 min-w-full h-14 text-center text-2xl rounded-sm transition-colors hover:bg-neutral-900">
					Entrar
					<FaSignInAlt className="text-neutral-50 text-xl absolute right-5 top-4"/>
				</button>
      </form>
    </div>
  )
}