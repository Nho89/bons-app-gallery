import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Create = () => {
  return (
    <>
    <Nav/>
    <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name"/><br/>
        <label htmlFor="email">Email Address: </label>
        <input type="email" name="email"/><br />
    </form>
    <Footer/>
    </>
  )
}

export default Create