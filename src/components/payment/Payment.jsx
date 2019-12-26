import React, { Component } from 'react'
import {Form, Label, Input, FormGroup, Button, Row, Col,Collapse} from 'reactstrap'
import requester from '../../Helpers/requester'



let disabled = false;
export default class Payment extends Component {
    
    state={
        artists:[],
        projects:[],
        artist:null,
        project:null,
        date:null,
        amount:null,
        
    };
    componentDidMount(){
        requester.artist.get()
        .then(res=>this.setState({artists:res.data}))
        .then(()=>this.setState({projects:this.state.artists[0].projects}))
    }
    makeChildren=(type)=>type.map((child,index)=><option key={index}>{child.name||child.projectName}</option>);
    handleChange=(e)=>{this.setState({[e.target.id]:e.target.value})};
    handleSubmit=(e)=>{
        e.preventDefault();
        disabled = true;
        const {artist:a,project:p,date,amount}=this.state;
        const artist = this.state.artists.filter(artist=>artist.name===a)[0];
        const artistId = artist._id;
        const project = artist.projects.filter(project=>p === project.projectName)[0];
        const projectId = project._id;
        const payment = {amount,date};
        requester.payment.post(artistId,projectId,payment)
            .then(res=>console.log(res))
            .then(()=>alert(`Success
                The Payment of : ${amount},
                was added to the artist : ${artist.name}'s
                project : ${project.projectName}
                on ${date}!
            `))
            .catch(err=>console.error(err))
    };

    render() {
        const {artist,project,date,amount} = this.state;
        return (
            <div className='container'>
                <h1 className={'text-center'}>Add A Payment</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                    <Col></Col>
                    <Col>
                    <FormGroup>
                        <Label>Artist</Label>
                        <Input id='artist'  onChange={this.handleChange}type='select'>
                            {this.state.artists && this.makeChildren(this.state.artists)}
                        </Input>
                    </FormGroup>
                        <Collapse isOpen={artist!==null}>
                            <FormGroup>
                                <Label>Project</Label>
                                <Input id='project' onClick={this.handleChange} onChange={this.handleChange}type='select'>
                                    {this.state.artist &&this.makeChildren(this.state.artists.filter(artist=>artist.name===this.state.artist)[0].projects)}
                                </Input>
                            </FormGroup>
                            <Collapse isOpen={project!==null}>
                                <FormGroup>
                                    <Label>Date</Label>
                                    <Input id='date'  onChange={this.handleChange} type='date'/>
                                </FormGroup>
                                <Collapse isOpen={date!==null} >
                                    <FormGroup>
                                        <Label>Amount</Label>
                                        <Input id='amount'  placeholder='100' onChange={this.handleChange} type='number'/>
                                    </FormGroup>
                                    <Collapse isOpen={amount!==null}>
                                        <Button disabled={disabled}>Add Payment</Button>
                                    </Collapse>
                                </Collapse>
                            </Collapse>

                        </Collapse>




                    </Col>
                    <Col></Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
