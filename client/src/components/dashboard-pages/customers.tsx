import React from 'react'

function Customers({ children }) {
  return (
    <div className="bg-neutral-100 rounded-sm shadow-lg p-4">
      <div className="text-left">
        <p className="text-neutral-800 text-2xl mb-2">Clientes</p>
        <div className="text-neutral-800 text-sm">
          Clientes
        </div>
      </div>
    </div>
  )
}

export default Customers;
