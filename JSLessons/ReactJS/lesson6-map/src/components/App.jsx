import React, { Component } from 'react'
import Card from './Card'
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className='row'>


          {data.infoData.map((geleninfo)=>{
            return  <Card 
            name={geleninfo.bookName}
            author={geleninfo.bookAuthor}
            count={geleninfo.bookCount}
             key={geleninfo.bookId}  />
          })}



          </div>
      </div>
    )
  }
}

export default App