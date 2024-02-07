import React from 'react'

const Create = () => {
  return (
    <>
    <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name"/><br/>
        <label htmlFor="email">Email Address: </label>
        <input type="email" name="email"/><br />
    </form>
    </>
  )
}

export default Create