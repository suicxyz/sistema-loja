"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import Search from "@/lib/actions/products/search";
import Create from "@/lib/actions/products/create";
import Report from "@/lib/actions/products/report";
import Purchase from "@/lib/actions/products/purchase";

function Products({ user }) {

  const [toggleState, setToggleState] = useState(1);

  function toggleAction(action) {
    setToggleState(action);
  }

  function handleRender() {
    if (toggleState == 1) return (<section><Search user={user}/></section>);
    if (toggleState == 2) return (<section><Create/></section>);
    if (toggleState == 3) return (<section><Report/></section>);
    if (toggleState == 4) return (<section><Purchase/></section>);
  }

  return (
    <div className="bg-neutral-100 rounded-sm shadow-lg p-4">
      <div className="text-left">
        <p className="text-neutral-800 text-2xl mb-2">Produtos</p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <div
            className={
              `${
              (toggleState == 1) 
              ? "bg-neutral-800 hover:bg-neutral-900"
              : "bg-neutral-700 hover:bg-neutral-800"
            } text-neutral-50 text-xl text-center p-3 w-full rounded-md transition-colors cursor-pointer`}
            onClick={() => toggleAction(1)}
          >Pesquisar produtos</div>
          <div
            className={
            `${
              (toggleState == 2)
              ? "bg-neutral-800 hover:bg-neutral-900" 
              : "bg-neutral-700 hover:bg-neutral-800" 
            } text-neutral-50 text-xl text-center p-3 w-full rounded-md transition-colors cursor-pointer`}
            onClick={() => toggleAction(2)}
          >Cadastrar produtos</div>
          <div
            className="bg-neutral-700 hover:bg-neutral-800 text-neutral-50 text-xl text-center p-3 w-full rounded-md transition-colors cursor-pointer"
            className={
            `${
              (toggleState == 3) 
              ? "bg-neutral-800 hover:bg-neutral-900" 
              : "bg-neutral-700 hover:bg-neutral-800" 
            } text-neutral-50 text-xl text-center p-3 w-full rounded-md transition-colors cursor-pointer`}
            onClick={() => toggleAction(3)}
          >Relatório de produtos</div>
          <div
            className={
            `${
              (toggleState == 4) 
              ? "bg-neutral-800 hover:bg-neutral-900" 
              : "bg-neutral-700 hover:bg-neutral-800" 
            } text-neutral-50 text-xl text-center p-3 w-full rounded-md transition-colors cursor-pointer`}
            onClick={() => toggleAction(4)}
          >Compra</div>
        </div>
        <div className="mt-5 w-full py-5">
          {handleRender()}
        </div>
      </div>
    </div>
  )
}

export default Products
