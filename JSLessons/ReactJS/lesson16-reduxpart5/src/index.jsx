import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { addBlog, editBlog, removeBlog } from "./actions/actionBlog";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import './assets/sass/style.css'
const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });
store.dispatch(addBlog({img:'https://aztech.az/wp-content/uploads/2021/07/ASUS-Zenbook-UM425UA-AM023-5.png', title: "Asus", desc: "ZenBook" }));
store.dispatch(addBlog({img:'https://aztech.az/wp-content/uploads/2021/07/ASUS-Zenbook-UM425UA-AM023-5.png', title: "Apple", desc: "MacBook" }));
store.dispatch(addBlog({img:'https://aztech.az/wp-content/uploads/2021/07/ASUS-Zenbook-UM425UA-AM023-5.png', title: "Acer", desc: "Swift" }));

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
