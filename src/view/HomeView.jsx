import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Home = ()=>{

  return (
    <>
      <p>Hello world</p>
      <Link  
        to={"/todo"}
      >
      Direction le todo
      </Link>
    </>
  )
}

export default Home