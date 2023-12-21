"use client"

import React, { useContext, useEffect } from 'react'

import { useRouter } from "next/navigation";
import { parseCookies } from 'nookies';
import { AuthContext } from '@/contexts/AuthContext'

import Layout from '@/components/dashboard/layout';
import ServicesP from "@/components/dashboard-pages/services";

export default function Services() {

  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const { "hspap.token" : token } = parseCookies();

    if (!token) router.replace("/");
  }, []);

  return (
    <Layout user={user}>
      <ServicesP/>
    </Layout>
  )
}