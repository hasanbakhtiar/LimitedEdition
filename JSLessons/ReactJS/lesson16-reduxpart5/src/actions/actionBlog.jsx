import { v4 as uuid } from 'uuid';

// Acton Start

export const addBlog = ({title,desc,img})=>({
    type:"ADD_BLOG",
    blog:{
      id:uuid(),
      title:title,
      desc:desc,
      img:img
    }
  })

  export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id:id
  })

  export const editBlog = (id,update)=>({
    type:"EDIT_BLOG",
    id,
    update
  })
  
  // Acton End