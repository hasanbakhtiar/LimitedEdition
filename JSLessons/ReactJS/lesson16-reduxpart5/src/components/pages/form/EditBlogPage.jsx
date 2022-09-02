import React from 'react'
import { connect } from 'react-redux'
import { editBlog, removeBlog } from '../../../actions/actionBlog'
import BlogForm from './BlogForm'

const EditBlogPage = props => {
  return (
    <div>
      <h3 className='text-center'>Edit Blog</h3>
      <BlogForm editblog={props.blogvalue}
      onFormSubmit={(a)=>{
        props.dispatch(editBlog(props.blogvalue.id,a));
        props.history.push('/admin');
      }}
      />
      <button className='btn btn-danger mt-3'
      onClick={()=>{
        props.dispatch(removeBlog({id:props.blogvalue.id}))
        props.history.push('/admin');
      }}>Delete</button>
    </div>
  )
}

const mapStateToProps=(state,props)=>{
  return{
    blogvalue: state.myreducer.find((b)=>{
      return b.id === props.match.params.id;
    })
  }
}

export default connect(mapStateToProps)(EditBlogPage)