import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='container text-center'>
               <h1> Welcome Back, {this.props.user.name}</h1>
            </div>
        )
    }
}
