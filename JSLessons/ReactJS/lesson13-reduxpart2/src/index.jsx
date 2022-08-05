import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { addBlog, editBlog, removeBlog } from "./actions/actionBlog";
import configureStore from "./store/configureStore";
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});
const a = store.dispatch(addBlog({ itemTitle: "Hello", itemDesc: "Hello desk" }));
const b = store.dispatch(addBlog({ itemTitle: "Mello", itemDesc: "Mello desk" }));

console.log(a.blog.id);
store.dispatch(removeBlog({id:a.blog.id}))

store.dispatch(editBlog(b.blog.id,{title:"Salam"}))

const App =()=>{
    return(
        <h1>Hello</h1>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));