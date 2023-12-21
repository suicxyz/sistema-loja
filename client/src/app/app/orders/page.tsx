"use client"

import React, { useContext, useEffect } from 'react'
import Link from 'next/link'

import { useRouter } from "next/navigation";
import { parseCookies } from 'nookies';

import { AuthContext } from '@/contexts/AuthContext'

import Layout from '@/components/dashboard/layout';
import OrdersP from "@/components/dashboard-pages/orders";

export default function Orders() {

  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const { "hspap.token" : token } = parseCookies();

    if (!token) router.replace("/");
  }, []);

  return (
    <Layout user={user}>
      <OrdersP/>
    </Layout>
  )
}