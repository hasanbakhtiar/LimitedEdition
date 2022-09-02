import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../../../actions/actionBlog'
import BlogForm from './BlogForm'

const AddBlog = props => {
  return (
    <div>
        <h1 className='text-center'>Add Blog</h1>
        <BlogForm onFormSubmit={(inputsvalue)=>{
          props.dispatch(addBlog(inputsvalue));
          props.history.push('/blogs');
        }}/>
    </div>
  )
}

export default connect()(AddBlog)