import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className='row'>
                    {this.props.usersvalue.map(u=>(
                        <User istifadeci={u} />
                        ))}
                </div>
            </div>
        )
    }
}

export default Users