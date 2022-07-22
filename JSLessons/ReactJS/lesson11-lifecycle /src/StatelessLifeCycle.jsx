import React from 'react'
import { useState,useEffect } from 'react'

const StatelessLifeCycle = () => {
    const [count,setCount] =  useState(0);
    const [newcount,setNewcount] =  useState(0);
    useEffect(()=>{
        console.log(1);
    },[])
  return (
    <div className='container'>
            <p>{count}</p>
            <button className='btn btn-success' onClick={()=>setCount(count+1)}>+</button>

            <p>{newcount}</p>
            <button className='btn btn-success' onClick={()=>setNewcount(newcount+1)}>+</button>
    </div>
  )
}

export default StatelessLifeCycle