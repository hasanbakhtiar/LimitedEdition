import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
        <div className="card col-12 col-sm-12 col-md-4 bg-dark text-light border-light">
          <div className="card-body">
            <h5 className="card-title">Name: {this.props.name}</h5>
            <p className="card-text">Author: {this.props.author}</p>
            <p className="card-text">Count: {this.props.count}pages</p>
          </div>
        </div>
    )
  }
}

export default Card