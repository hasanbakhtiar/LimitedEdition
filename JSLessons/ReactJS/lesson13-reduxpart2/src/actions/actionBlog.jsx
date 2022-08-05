import { v4 as uuid } from 'uuid';

// Acton Start

export const addBlog = ({itemTitle,itemDesc})=>({
    type:"ADD_BLOG",
    blog:{
      id:uuid(),
      title:itemTitle,
      desc:itemDesc
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