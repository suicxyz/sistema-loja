"use client"

import React, { useContext, useEffect } from 'react'
import Link from 'next/link'

import { useRouter } from "next/navigation";
import { parseCookies, destroyCookie } from 'nookies';

import Axios from '@/services/axios';

export default function Dashboard() {

  const router = useRouter();

  useEffect(() => {
    const { "hspap.token" : token } = parseCookies();

    if (!token) router.replace("/")

    destroyCookie(undefined, "hspap.token");

    console.log(parseCookies());

    router.replace("/");
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-neutral-100 flex items-center justify-center text-center">
      <p className="text-2xl text-neutral-900 text-medium">Encerrando sessão</p>
    </div>
  )
}