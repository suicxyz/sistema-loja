import React from 'react'

function Main({ children }) {
  return (
    <div className="bg-neutral-100 rounded-sm shadow-lg p-4">
      <div className="text-left">
        <p className="text-neutral-800 text-2xl mb-2">Painel de Controle</p>
        <div className="text-neutral-800 text-sm">
          Painel inicial
        </div>
      </div>
    </div>
  )
}

export default Main