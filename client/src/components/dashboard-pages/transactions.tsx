import React from 'react'

function Transactions({ children }) {
  return (
    <div className="bg-neutral-100 rounded-sm shadow-lg p-4">
      <div className="text-left">
        <p className="text-neutral-800 text-2xl mb-2">Transações</p>
        <div className="text-neutral-800 text-sm">
          Transações
        </div>
      </div>
    </div>
  )
}

export default Transactions