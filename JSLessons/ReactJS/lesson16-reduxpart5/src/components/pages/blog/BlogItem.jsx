import React from 'react'
import { Link } from 'react-router-dom'
const BlogItem = ({id,title,desc,img}) => {
  return (
    <div className="card col-12 col-sm-12 col-md-4" >
      <img src={img} alt="err" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p>{desc}</p>
      <Link to={`/blogs/${id}`} className="btn btn-primary">Description</Link>
    </div>
  </div>
  )
}

export default BlogItem