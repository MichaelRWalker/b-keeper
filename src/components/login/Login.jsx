import React, { Component } from "react";
import requester from "../../Helpers/requester";
import {Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap';



export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            valid:true,
        }
    }

    handleEmailChange=(e)=>{
        this.setState({
            valid:true,
            email:e.target.value
        })
    };
    handlePasswordChange=(e)=>{
        this.setState({
            valid:true,
            password:e.target.value
        })
    };
    handleSubmit=async(e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        const user = {email,password};
        requester.login(user)
        .then(res=>this.props.auth(res.data))
        .then(()=>this.props.login(true))
        .then(()=>window.location='/')
        .catch(err=>{
          this.setState({valid:false});
          alert('Invalid Login: ' + err)
        })

    };




  render() {
    const {handleSubmit,handleEmailChange,handlePasswordChange,state}=this;
    const {valid} = state;
    return (
      <div className='container' >
      <br/>
      <Row xs={1} sm={3} md={3} >
      <Col></Col>
      <Col className='w-100'>
      <Form  onSubmit={handleSubmit} >
        <h1>Log In</h1>
        <br/>
        <FormGroup className="form-group">
          <Label htmlFor="exampleInputEmail1">Email address</Label>
          <Input
            valid={valid} invalid={!valid}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleEmailChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </FormGroup>
        
        <FormGroup className="form-group">
          <Label htmlFor="exampleInputPassword1">Password</Label>
          <Input
            valid={valid} invalid={!valid}
            type="password"
            autoComplete='current password'
            className="form-control"
            id="password"
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <Button type="submit" style={{cursor:'pointer'}} className="btn btn-primary" >
          Submit
        </Button>
      </Form>
      </Col>
      <Col></Col>
      </Row>
      </div>
    );
  }
}
//style={{backgroundImage: `url(${background})`,width:`100%`}}