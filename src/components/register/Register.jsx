import React, { Component } from 'react'
import {Input, Form, FormGroup, Label, Button} from 'reactstrap'

export default class RegisterPage extends Component {

  constructor(props){
    super(props)
    this.state ={
      name:'',
      email:'',
      password:'',
      studioName:'',
    }
  }


 handleChange=(e)=>{
   const {id,value} = e.target
   const updatedField = {[id]:value}
   console.log(updatedField)
  this.setState({[id]:value})
 }

 handleSubmit=(e)=>{
   e.preventDefault();
   console.log(this.state);
 }

    render() {
        return (
            <Form>            
            <FormGroup className="form-group">
                <Label htmlFor="inputEmail4">Name</Label>
                <Input type="text" onChange={this.handleChange} className="form-control" id="name"/>
              </FormGroup>
              <FormGroup className="form-group">
                <Label htmlFor="inputEmail4">Email</Label>
                <Input type="email" onChange={this.handleChange} className="form-control" id="email"/>
              </FormGroup>
            <FormGroup className="form-group">
              <Label htmlFor="inputAddress">Password</Label>
              <Input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="YourPassword"/>
            </FormGroup>
            <FormGroup className="form-group">
              <Label htmlFor="inputAddress2">Confirm Password</Label>
              <Input type="password" className="form-control" id="passwordConfirm" placeholder="YourPassword"/>
            </FormGroup>
              <FormGroup className="form-group">
                <Label htmlFor="inputCity">Studio Name</Label>
                <Input type="text" onChange={this.handleChange} className="form-control" id="studioName"/>
            </FormGroup>
              <FormGroup className="form-check">
            </FormGroup>
            <Button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">Sign in</Button>
          </Form>
        )
    }
}
