"use client"

import React, { useContext, useEffect } from 'react'
import Link from 'next/link'

import { useRouter } from "next/navigation";
import { parseCookies } from 'nookies';

import { AuthContext } from '@/contexts/AuthContext'

export default function Dashboard() {

  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const { "hspap.token" : token } = parseCookies();

    if (!token) router.replace("/");
  }, []);

  return (
    <div>
      Configurações de usuário
    </div>
  )
}