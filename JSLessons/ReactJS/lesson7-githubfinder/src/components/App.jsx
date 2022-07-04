import React, { Component } from 'react'
import axios from 'axios';
import Nav from './Nav'
import Search from './Search'
import Users from './Users'

class App extends Component {
constructor(props){
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.state={
        users:[]
    }
}

    searchUsers(keyword){
            axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res=>this.setState({users:res.data.items}))
    }


  render() {
    return (
      <div>
        <Nav url='https://github.com' icon="fa-brands fa-github"/>
        <Search serchValue={this.searchUsers}/>
        <Users usersvalue = {this.state.users}/>
      </div>
    )
  }
}

export default App