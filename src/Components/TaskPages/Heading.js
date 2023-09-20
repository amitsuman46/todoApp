import React from 'react'

const Heading = (props) => {
  return (
    <>
    <div style={{textAlign:"center", fontSize:"32px", marginTop:"17px"}}>
    <span style={{color: "#952323"}}>Welcome {props.name}, </span>
    <span style={{color: "#A99898"}}>Start Planning your day</span>
    </div>
    </>
  )
}

export default Heading