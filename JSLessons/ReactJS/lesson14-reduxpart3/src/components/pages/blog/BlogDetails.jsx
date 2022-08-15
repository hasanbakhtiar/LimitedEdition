import React from 'react'
import { connect } from 'react-redux'
import BlogDetailItem from './BlogDetailItem'


const BlogDetails = props => {
  return (
    <div><BlogDetailItem {...props.value}/></div>
  )
}

const mapStateToProps=(state,props)=>{
   return{
    value: state.myreducer.find((v)=>{
        return v.id === props.match.params.id
    })
}
}

export default connect(mapStateToProps)(BlogDetails)