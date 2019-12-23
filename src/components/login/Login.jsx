import React, { Component } from "react";
import requester from "../../Helpers/requester";
import {Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap';



export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleEmailChange=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }    
    handleSubmit=async(e)=>{
        e.preventDefault()
        // Auth Route
        const user = {
          email:this.state.email,
          password:this.state.password
        }
        requester.login(user)
        .then(res=>{
          this.props.login(true)
          this.props.auth(res.data)
        })
        .then(()=>window.location='/')
        .catch(err=>console.warn('Invalid Login: '+err))

    }




  render() {
    return (
      <div className='container' >
      <Row>
      <Col></Col>
      <Col className='w-50'>
      <Form onSubmit={this.handleSubmit} >
        <FormGroup className="form-group">
          <Label htmlFor="exampleInputEmail1">Email address</Label>
          <Input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleEmailChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </FormGroup>
        
        <FormGroup className="form-group">
          <Label htmlFor="exampleInputPassword1">Password</Label>
          <Input
            type="password"
            autoComplete='current password'
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handlePasswordChange}
          />
        </FormGroup>
        <FormGroup className="form-group form-check">
          <Input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <Label className="form-check-label" htmlFor="exampleCheck1">
            Keep me Logged in
          </Label>
        </FormGroup>
        <Button type="submit" className="btn btn-primary" >
          Submit
        </Button>
      </Form>
      </Col>

      </Row>
      </div>
    );
  }
}
//style={{backgroundImage: `url(${background})`,width:`100%`}}