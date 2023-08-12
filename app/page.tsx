import React from 'react'
import Landing from '@/src/landing'


const page = () => {

  return (
  <main>
    <Landing  apikey={process.env.APIKEY!}/>
  </main>
  )
}

export default page