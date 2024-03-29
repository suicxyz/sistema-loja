"use client"

import React, { useContext, useEffect } from 'react'
import Link from 'next/link'

import { useRouter } from "next/navigation";
import { parseCookies } from 'nookies';

import { AuthContext } from '@/contexts/AuthContext'

import Layout from '@/components/dashboard/layout';
import ProductsP from "@/components/dashboard-pages/products";

export default function Products() {

  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const { "hspap.token" : token } = parseCookies();

    if (!token) router.replace("/");
  }, []);

  return (
    <Layout user={user}>
      <ProductsP user={user}/>
    </Layout>
  )
}