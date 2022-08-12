import React from 'react'
import { Link } from 'react-router-dom'
const BlogItem = ({title,desc}) => {
  return (
    <div className="card col-12 col-sm-12 col-md-4" >
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p>{desc}</p>
      <Link to="#" className="btn btn-primary">Description</Link>
    </div>
  </div>
  )
}

export default BlogItem