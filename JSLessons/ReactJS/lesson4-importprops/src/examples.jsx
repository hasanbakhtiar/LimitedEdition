import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Nav';





class App extends Component {
  render() {
    // const a = "Hello1";
    return (
      <div>
          {/* <h1>{a}</h1> */}
          {/* <h1>Hello</h1> */}
          <Navbar />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector("#root"));