import React, { Component } from 'react'
import {Form, Label, Input, FormGroup, Button, Row, Col,UncontrolledTooltip} from 'reactstrap'
import requester from '../../Helpers/requester'





export default class Appointment extends Component {
    state={
        artists:null,
        artist:null,
        date:null,
        time:null,
        location:null,
    };
    componentDidMount(){requester.artist.get().then(res=>this.setState({artists:res.data}))}
    makeOptions=(arr)=>arr.map(artist=><option key={artist._id}>{artist.name}</option>);
    handleChange=(e)=>{this.setState({[e.target.id]:e.target.value})};
    handleSubmit=(e)=>{
        e.preventDefault();
        const {artist,date,time,location} = this.state;
        const appointment = {artist,date,time,location};
        const complete = Object.values(this.state).includes(null);
        !complete||requester.appointment.post(appointment);
        !complete|| alert('Appointment Added');
        !complete||e.target.reset();
    };

    render() {
        return (
            <div className='container'>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                    <Col>{' '}</Col>
                    <Col>
                    <FormGroup>
                        <Label>Artist</Label>
                        {this.state.artists &&
                        <Input type='select'  onChange={this.handleChange} children={this.makeOptions(this.state.artists)}/>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label>Date</Label>
                        <Input id='date' className='' onChange={this.handleChange} type='date'/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Time</Label>
                        <br/>
                        <UncontrolledTooltip target={'time'} placement='right'>Hours:Minutes-(AM or PM )</UncontrolledTooltip>
                        <Input id='time' className='' onChange={this.handleChange} type='time'/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Location</Label>
                        <Input id='location' className='' placeholder='Recording Location' onChange={this.handleChange} type='text'/>
                    </FormGroup>
                    <Button >Add To Calender</Button>
                    </Col>
                        <Col>{' '}</Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
