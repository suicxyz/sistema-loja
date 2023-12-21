import React from 'react'
import Link from 'next/link';

import { FaBell } from "react-icons/fa";

function Header({ user }) {
  return (
    <header className="bg-neutral-50 h-16 px-4 flex justify-between items-center border-b border-neutral-200">
      <p className="text-neutral-900 text-xl">Olá, <Link href="/account/" title="Acessar sua conta." className="no-outline hover:no-outline">{user.name}</Link>.</p>
      <div className="flex items-center gap-2 mr-2">
        <div className="relative">
          <FaBell className="text-neutral-900 text-xl cursor-pointer" title="Notificações"/>
        </div>
      </div>
    </header>
  )
}

export default Header;