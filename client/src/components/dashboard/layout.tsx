"use client"

import Aside from '@/components/dashboard/aside';
import Main from '@/components/dashboard/main';
import Header from '@/components/dashboard/header';

export default function Layout({ children, user }) {
  return (
    <div className="flex flex-row bg-neutral-50 h-screen w-screen overflow-hidden">
      <Aside />
        <div className="flex-1">
          <Header user={ user }/>
          <Main className="p-2.5">
            { children }
          </Main>
        </div>
    </div>
  )
}