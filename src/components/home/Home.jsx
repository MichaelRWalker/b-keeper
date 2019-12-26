import React, { Component } from 'react'
import { Badge } from 'reactstrap'

export default class Home extends Component {
    render() {
        return (
            <div className='container text-center'>
               <h1> Welcome Back, {this.props.user.name} <Badge>Creator</Badge></h1>
            </div>
        )
    }
}
