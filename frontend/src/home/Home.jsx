import React from 'react'
import Navbar from '../component/Navbar'
import Freebook from '../component/Freebook'
import Footer from '../component/Footer'
import Bannner from '../component/Bannner'

function home() {
  return (
    <>
    
  <div className=' pt-20'>

     <Navbar/>
       <Bannner/>
      <Freebook/>
       <Footer/>
  </div>
      

       
    
    </>
  )
}

export default home
