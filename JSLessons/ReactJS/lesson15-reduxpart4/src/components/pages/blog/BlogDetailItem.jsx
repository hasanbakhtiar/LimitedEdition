import React from 'react'

const BlogDetailItem = ({id,title,desc}) => {
  return (
    <div className='container mt-5'>
        <p className='text-primary'>Blog ID: <span className='text-dark'>{id}</span></p>
        <p className='text-danger'>Blog Title: <span className='text-dark'>{title}</span></p>
        <p className='text-success'>Blog Description: <span className='text-dark'>{desc}</span></p>
    </div>
  )
}

export default BlogDetailItem