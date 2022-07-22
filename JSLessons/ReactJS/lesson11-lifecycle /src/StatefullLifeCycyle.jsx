import React from "react";
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Component } from "react";
import Loader from "./Loader";
import { Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.addCount = this.addCount.bind(this);
    this.state = {
      count: 0,
    };
    console.log("constructor is running...");
  }

  //   componentDidMount() {
  //     console.log("componentDidMount is running...");
  //     // document.querySelector('h1').style.color = 'red';
  //   }
  componentDidUpdate() {
    document.querySelector('span').innerHTML = "new value";
    console.log("componentDidUpdate");
    // alert('success');
  }
  addCount(){
    this.setState({
        count:this.state.count+1
    })
  }
  render() {
    return (
      <Fragment>
        <div className="container">
            <span></span>
          <p>{this.state.count}</p>
          <button className="btn btn-success" onClick={this.addCount}>+</button>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
