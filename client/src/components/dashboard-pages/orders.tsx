import React from 'react'

function Orders({ children }) {
  return (
    <div className="bg-neutral-100 rounded-sm shadow-lg p-4">
      <div className="text-left">
        <p className="text-neutral-800 text-2xl mb-2">Pedidos</p>
        <div className="text-neutral-800 text-sm">
          Pedidos
        </div>
      </div>
    </div>
  )
}

export default Orders