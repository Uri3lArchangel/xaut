'use client'
import React, { useEffect, useState } from 'react'
import main from '../app/main.module.css'
import Web3 from 'web3'
import { tokenPriceFetchXAUT, tokenPriceFetchXrp } from '@/app/fetch'


declare global{
  interface Window{
    ethereum:any
  }
}
const Landing = ({apikey}:{apikey:string}) => {
const [xautprice,setXautPrice]=useState("")
const [xrpprice,setXrpPrice]=useState("")

    useEffect(() => {
      
       const init=  async()=>{
        setXrpPrice(((await tokenPriceFetchXrp(apikey)).toFixed(2)))
        setXautPrice(((await tokenPriceFetchXAUT(apikey)).toFixed(2)))
    
    }
       init()
  
    }, [])
    
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
        <h2>XAUT LIVE PRICE : ${xautprice}</h2>
        <h2>XRP LIVE PRICE : ${xrpprice}</h2>
        <div>
          <input type="text"  placeholder='enter xaut amount'/>
          <input type="text" disabled placeholder='you will receive xrp' />
          <button onClick={wallet}>Swap</button>
        </div>
      </div>
    </section>
  )
}

export default Landing