import React, { Component } from 'react'
import {Form,FormGroup,Label,Input,Col,Button} from 'reactstrap'
import requester from '../../Helpers/requester'





export default class AddSession extends Component {
    state={
        Artists:[],
        readyToSubmit:false,
        Hours :null,
        Cost  :null,
        Date  :null, 
        Action:null,
        Artist  :null,
        Project :null,

    };

    componentDidMount(){
        requester.artist.get()
        .then(res=>this.setState({Artists:res.data}))
        .then(()=>this.setState({
            Artist:this.state.Artists[0].name,
            Project:this.state.Artists[0].projects[0].projectName}))
    }

    handleSubmit=(e)=>{
        const {Hours:hours , Cost:cost , Action:action , Date:date,Artists,Project} = this.state;
        const artist = Artists.filter(artist=>artist.name===this.state.Artist)[0];
        const artistID = artist._id;
        const projectID = artist.projects.filter(project=>project.projectName=Project)[0]._id;
        const session ={ action, date, cost, hours };
        e.preventDefault();

        requester.session.post(artistID,projectID,session);
        this.setState({hours:null,cost:null,action:null},()=>{
            this.setReadyStatus()
        })
    };
    handleChange=(e)=>this.setState({[e.target.id]:e.target.value},this.setReadyStatus);
    
    
    setReadyStatus=()=>{ 
        Object.values(this.state).includes(null) ? 
            this.setState({readyToSubmit:false}):
            this.setState({readyToSubmit:true})
    };

    render() {
        return (
            <div className='container w-50'>
                <Form id='sessionForm' >
                    <FormGroup row >
                        <Label md={2}>Artist</Label>
                        <Col>
                            <Input id='Artist' onChange={this.handleChange} md={2} type='select'>
                                {this.state.Artists.map(artist=><option key={artist.name}>{artist.name}</option>)}
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                        <Label md={2}>Project</Label>
                        <Col>
                        {   this.state.Artist && (
                            <Input id='Project' onChange={this.handleChange} md={2} type='select'>
                            {this.state.Artists.filter(artist=>artist.name===this.state.Artist)[0]
                            .projects.map(project=><option key={project.projectName}>{project.projectName}</option>)}
                            </Input>
                        )}    
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                        <Label md={2}>Hours</Label>
                        <Col>
                            <Input id='Hours' onChange={this.handleChange} md={2} type='number' placeholder={4}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={2} >Action</Label>
                        <Col>
                            <Input id='Action' onChange={this.handleChange} md={2} type='text' placeholder='A Short Session Description'></Input>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label md={2} >Date</Label>
                        <Col>
                            <Input id='Date' onChange={this.handleChange} md={2} type='Date'></Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label md={2} >Cost</Label>
                    <Col>
                        <Input id='Cost' onChange={this.handleChange} md={2} type='number' placeholder={250}></Input>
                    </Col>
                    </FormGroup>

                    <Button className='col' onClick={this.handleSubmit} active={this.state.readyToSubmit}  disabled={!this.state.readyToSubmit} >Add Session</Button>

                </Form>
            </div>
        )
    }
}
