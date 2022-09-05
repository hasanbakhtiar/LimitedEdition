import React from 'react'

const Movie = ({title,earn}) => {
  return (
    <ul>
        <li>name:{title}</li>
        <li>price:{earn}</li>
    </ul>
  )
}

export default Movie