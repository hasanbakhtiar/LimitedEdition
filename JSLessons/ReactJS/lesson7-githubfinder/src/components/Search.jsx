import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.mySubmit = this.mySubmit.bind(this);
        this.state={
            keyword:""
        }

    }
    inputChange(e){
            this.setState({
                keyword:e.target.value
            })
    }

    mySubmit(e){
        e.preventDefault();
        this.props.serchValue(this.state.keyword);

    }    
  render() {
    return (
      <form onSubmit={this.mySubmit}>
            <div className="container my-3">
                <div className="input-group">
                    <input onChange={this.inputChange} type="text" className="form-control" />
                    <div className="input-group-append">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
                    {/* {this.state.keyword} */}
            </div>
      </form>
    )
  }
}

export default Search