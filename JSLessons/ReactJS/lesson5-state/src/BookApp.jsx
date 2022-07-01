import React, { Component } from 'react'
import img1 from './img/img.jpeg';
import img2 from './img/img1.jpg';

export class BookApp extends Component {
    constructor(props){
        super(props);
        this.bookNext = this.bookNext.bind(this);
        this.state={
            img:img1,
            bookName: "1984",
            author: "George Orwell",
            bookCount:400
        }
    }
    bookNext(){
        this.setState({
            img:img2,
            bookName: "Sefiller",
            author: "Viktor Hugo",
            bookCount:700
        })
    }
    
  render() {
    return (
      <div className='container mt-5'>
        <img width="150" src={this.state.img} alt="" />
        <p><span className='text-danger'>Book Name:</span>  {this.state.bookName}</p>
        <p><span className='text-danger'>Book Author</span> : {this.state.author}</p>
        <p><span className='text-danger'>Book Counter:</span>  {this.state.bookCount}</p>
        <button onClick={this.bookNext} className='btn btn-success'>Next Book</button>
      </div>
    )
  }
}

export default BookApp