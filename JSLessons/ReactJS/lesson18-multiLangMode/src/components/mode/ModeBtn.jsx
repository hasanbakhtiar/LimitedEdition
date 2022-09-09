import React from 'react'

const ModeBtn = ({color,setColor}) => {
    const switchColor = ()=>{
        setColor(color === "light"? 'dark': 'light')
    }
  return (
    <div><button onClick={switchColor}>mode</button></div>
  )
}

export default ModeBtn