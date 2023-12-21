import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Add from '../component/Add'
import Category from '../component/Category'
import View from '../component/View'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function Home() {

  const [resState,setResState]=useState(false)
  const changeResState=()=>{
    setResState(true)
  }
  return (
    <div>
      <h2>All Videos
        <Link style={{float:'right', fontSize:'20px', color:'white', textDecoration:'none'}} to ={'/watch-history'}>watch-history</Link>
      </h2>
      <Row className='mx-5 mt-5 mb-5 p-5'>
<Col md='1'>
  <Add changeResState={changeResState}/>
</Col>
<Col md='8'>
  <View resState={resState}/>
</Col>
<Col md='3'>
  <Category changeResState={changeResState}/>
</Col>
      </Row>
      <ToastContainer/>
    </div>
    
  )
}

export default Home