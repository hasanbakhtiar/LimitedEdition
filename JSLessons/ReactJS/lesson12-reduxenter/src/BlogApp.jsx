import React from 'react'
import { v4 as uuid } from 'uuid';
import {createStore} from 'redux'


// Acton Start

const addBlog = ({itemTitle,itemDesc})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title:itemTitle,
    desc:itemDesc
  }
})

// Acton End


// Reducer Start
const blogState = [];
const blogReducer = (state = blogState,action)=>{
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog];

    case "REMOVE_BLOG":
      return state;

    case "UPDATE_BLOG":
      return state;

      

  
    default:
      return state;
  }
}
// Reducer End



// Store Start
const store  = createStore(blogReducer)
// Store End



// Dispatch Start
// Dispatch End


store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(addBlog({itemTitle:"Hello",itemDesc:"Hello desk"}))
store.dispatch(addBlog({itemTitle:"Mello",itemDesc:"Mello desk"}))






const BlogApp = () => {
  return (
    <div>BlogApp</div>
  )
}

export default BlogApp