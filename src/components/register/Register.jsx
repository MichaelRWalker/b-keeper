import React, { Component } from 'react'
import {Input, Form, FormGroup, Label, Button, Row, Col} from 'reactstrap'
import requester from '../../Helpers/requester'



export default class Register extends Component {

  constructor(props){
    super(props)
    this.state ={
      name:null,
      email:null,
      password:null,
      studioName:null,
      passwordConfirm:null,
      studioType:null
    }
  }


 handleChange=(e)=>{
    const {id,value} = e.target
    const updatedField = {[id]:value}
    this.setState(updatedField)
 }

 handleSubmit=(e)=>{
   const {password,passwordConfirm ,name,email,studioName,studioType} = this.state
   const newUser = {name,email,password,studioName,studioType}
   e.preventDefault();
  passwordConfirm === password ?
  requester.user.post(newUser)  
  :
   window.alert('Passwords dont match')
 }

    render() {
        return (
          <div className='container '>
          <Row>
            <Col></Col>
            <Form onSubmit={this.handleSubmit} className='form w-50'>            
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
                <Input type="password" onChange={this.handleChange} autoComplete='new password' className="form-control" id="password" placeholder="YourPassword"/>
              </FormGroup>
              <FormGroup className="form-group">
                <Label htmlFor="inputAddress2">Confirm Password</Label>
                <Input type="password" onChange={this.handleChange} className="form-control" id="passwordConfirm"autoComplete='new password' placeholder="YourPassword"/>
              </FormGroup>
              <FormGroup className="form-group">
                <Label htmlFor="inputCity">Studio Name</Label>
                <Input type="text" onChange={this.handleChange} className="form-control" id="studioName"/>
              </FormGroup>
              <FormGroup>
                <Label>Studio Type</Label>
                <select id='studioType' onChange={this.handleChange} className='form-control'>
                  <option>Choose One</option>
                  <option value='hourly'>Hourly</option>
                  <option value='perSession'>Per Session</option>
                  <option value='perSong'>Per Song</option>
                </select>
              </FormGroup>
            <Button type="submit"  className="btn btn-primary">Register</Button>
          </Form>
          <Col></Col>
          </Row>
          </div>
        )
    }
}
