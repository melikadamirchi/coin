import React from 'react'
import '../../bootstrap.css'

function Coin({name,price,icon,symbol}) {
  return (
    <div className='p-1 m-1 text-center font-monospace'>
        <h1>Name: {name}</h1>
        <h2>Price: {price}</h2>
        <h3>Icon: {icon}</h3>
        <h4>Symbol: {symbol}</h4>
        <h5><img src={icon} alt="" /></h5><br />
    </div>
  )
}

export default Coin