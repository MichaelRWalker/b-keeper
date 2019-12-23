import React, { Component } from 'react'
import {Form, Label, Input, FormGroup, Button, Row, Col} from 'reactstrap'
import requester from '../../Helpers/requester'


let update = false
export default class Payment extends Component {
    
    state={
        artists:[],
        projects:[],
        artist:null,
        project:null,
        date:null,
        amount:null,
        
    }
    componentDidMount(){
        this.props.update?update=false:update=true
        requester.artist.get()
        .then(res=>this.setState({artists:res.data}))
        .then(()=>this.setState({projects:this.state.artists[0].projects}))
        .then(()=>console.log(this.state))
    }
    makeChildren=(type)=>type.map((child,index)=><option key={index}>{child.name||child.projectName}</option>)
    
    setUpdate(){}
    handleChange=(e)=>{this.setState({[e.target.id]:e.target.value})}
    handleSubmit=()=> Object.values(this.state).includes(null)||requester[update?'update':'post'].payment(this.state)

    render() {
        return (
            <div className='container'>
                <Form>
                    <Row>
                    <Col></Col>
                    <Col>
                    <FormGroup>
                        <Label>Artist</Label>
                        <Input id='artist'  onChange={this.handleChange}type='select'>
                        {this.makeChildren(this.state.artists)}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Project</Label>
                        <Input id='project' onClick={this.handleChange} onChange={this.handleChange}type='select'>
                        {this.makeChildren(this.state.projects)}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Date</Label>
                        <Input id='date'  onChange={this.handleChange} type='date'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Amount</Label>
                        <Input id='amount'  placeholder='100' onChange={this.handleChange} type='number'/>
                    </FormGroup>
                    <Button>Add To Calander</Button>
                    </Col>
                    <Col></Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
