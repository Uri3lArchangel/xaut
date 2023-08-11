'use client'
import React from 'react'
import main from './main.module.css'
import Web3 from 'web3'


declare global{
  interface Window{
    ethereum:any
  }
}
const page = () => {
async  function wallet(){
  if(!window.ethereum){

  }
const web3 = new Web3(window.ethereum)
await web3.eth.requestAccounts()
  }
  return (
    <section className={main.Main}>
      <div>
        <h1>XAUT / XRP</h1>
        <div>
          <input type="text"  placeholder='enter xaut amount'/>
          <input type="text" disabled placeholder='you will receive xrp' />
          <button onClick={wallet}>Swap</button>
        </div>
      </div>
    </section>
  )
}

export default page