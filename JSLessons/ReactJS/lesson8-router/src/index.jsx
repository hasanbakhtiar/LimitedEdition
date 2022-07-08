import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AppRouters from './routers/AppRouters';
ReactDOM.render(<AppRouters />, document.querySelector("#root"));

// class App extends Component{
//     render(){
//         return(
//             <h1>Hello</h1>
//         )
//     }
// }

// const App =()=>{

//     return(
//         <h1>Hello</h1>
//     )
// }

// function App (){
//     return(
//         <h1>Hello1</h1>
//     )
// }
