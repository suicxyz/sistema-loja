import React from 'react'
import Link from 'next/link';

import { FaStar, FaSignOutAlt } from "react-icons/fa";

import { SIDEMENU_NAVIGATION, SIDEMENU_BOTTOM_NAVIGATION } from '@/lib/consts/navigation';

function Aside() {
  return (
    <aside className="bg-zinc-900 p-4 flex flex-col w-70 text-white">
      <div className="flex items-center gap-2 px-1 py-3 text-center">
        <FaStar className="text-green-300 text-2xl"/>
        <p className="text-green-300 text-3xl">Excellent</p>
      </div>
      <div className="flex flex-col flex-1 py-8 gap-0.5">
        {SIDEMENU_NAVIGATION.map((item) => (
          <AsideLink key={item.key} item={item}/>
        ))}  
      </div>
      <div>
        {SIDEMENU_BOTTOM_NAVIGATION.map((item) => (
          <AsideLink key={item.key} item={item}/>
        ))}

        <Link href="/app/logout" className="flex items-center gap-2 font-light px-3 py-2 hover:no-underline active:bg-red-500 active:text-white rounded-sm text-base text-red-600 hover:bg-red-500 hover:text-white cursor-pointer">
          <span className="text-xl"><FaSignOutAlt/></span>
          <span>Sair</span>
        </Link>
      </div>
    </aside>
  )
}

function AsideLink({ item }: any) {
  return (
    <Link href={item.path} className="flex items-center gap-2 font-light px-3 py-2 hover:bg-zinc-700 hover:no-underline active:bg-zinc-700 rounded-sm text-base text-white">
      <span className="text-xl">{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  )
}

export default Aside;