import React,{Component} from "react";


class Counter extends Component {
    constructor(props){
      super(props);
      this.decrement=this.decrement.bind(this);
      this.increment=this.increment.bind(this);
      this.state={
       count:0
      }
    }
  
    decrement(){
      this.setState({
        count: this.state.count - 1
       })
      // console.log('decerment');
    }
  
    increment(){
      this.setState({
        count: this.state.count + 1
       })
      // console.log('increment');
    }
  
    render() {
      return (
        <div className='container mt-5'>
          <button  onClick={this.decrement} className='btn btn-danger btn-sm'>-1</button>
          <span className='mx-2'>{this.state.count}</span>
          <button onClick={this.increment} className='btn btn-success btn-sm'>+1</button>
        </div>
      )
    }
  }
  
  export default Counter;