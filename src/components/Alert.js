import React from 'react'
import { useState } from 'react'

function Alert() {
    const [name,setName]=useState('')
    const showmsg=(e)=>{
        alert(name)
    }
    
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}></input><br></br>
        <button onClick={showmsg}>Click here</button>


        </div>
  )
}


export default Alert