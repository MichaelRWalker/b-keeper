import React, { Component } from 'react'
import {Form, Label, Input, FormGroup, Button, Row, Col} from 'reactstrap'
import requester from '../../Helpers/requester'


let update = false

export default class Appointment extends Component {

    state={
        artist:null,
        date:null,
        time:null,
        location:null,
    }
    componentDidMount(){this.props.update?update=false:update=true}
    setUpdate(){}
    handleChange=(e)=>{this.setState({[e.target.id]:e.target.value})}
    handleSubmit=()=> Object.values(this.state).includes(null)||requester[update?'update':'post'].appointment(this.state)

    render() {
        return (
            <div className='container'>
                <Form>
                    <Row>
                    <Col></Col>
                    <Col>
                    <FormGroup>
                        <Label>Artist</Label>
                        <Input id='artist' className='' placeholder='Artist Name' onChange={this.handleChange} type='text'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Date</Label>
                        <Input id='date' className='' onChange={this.handleChange} type='date'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Time</Label>
                        <br/>
                        <small>Hours : Minutes - (AM or PM )</small>
                        <Input id='time' className='' onChange={this.handleChange} type='time'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Location</Label>
                        <Input id='location' className='' placeholder='Recording Location' onChange={this.handleChange} type='text'></Input>
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
