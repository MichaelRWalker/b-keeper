import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap'
import requester from "../../Helpers/requester";

export default class AddProject extends Component {
    state={
        artists:[],
        artist:'',
        tracks:0,
        deposit:'',
        projectName:'',
        startDate:''
    };

    handleClick=()=>{};
    handleSubmit=(e)=> {
        e.preventDefault()
        const {artist:a, tracks, deposit, projectName, startDate} = this.state;
        const artistId = this.state.artists.filter(artist => artist.name === a)[0]._id;
        const project = {tracks, deposit, projectName, startDate};
        requester.project.post(artistId, project)
            .then(res => alert(`Success
               The Project : ${project.name},
               for the artist :${a},
               has been saved to the database.
               Returning to the roster page!
            `))
            .then(() => window.location = '/roster')
            .catch(err => console.error(err))
    }
    ;
    handleChange=(e)=>{this.setState({[e.target.id]:e.target.value})};
    makeOptions=(arr)=> arr.map(element=><option key={element.name}>{element.name}</option>);
    componentDidMount() {
        requester.artist.get()
            .then(res=>{
                this.setState({artists:res.data});
            })
            .then(()=>{
                this.setState({
                    artist:this.state.artists[0]
                })
            })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>{" "}</Col>
                        <Col>
                            <FormGroup>
                                <Label>Artist</Label>
                                <Input
                                    id="artist"
                                    placeholder='Artist Name'
                                    type='select'
                                    onChange={this.handleChange}
                                >
                                    {this.state.artists && this.makeOptions(this.state.artists) }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Tracks</Label>
                                <Input
                                    id="tracks"
                                    placeholder='Number of Tracks'
                                    type='number'
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Deposit</Label>
                                <Input
                                    id="deposit"
                                    placeholder={`${this.state.tracks * 150}`}
                                    type='number'
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Project Name</Label>
                                <Input
                                    id="projectName"
                                    placeholder='The name of the project'
                                    type='text'
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Start Date</Label>
                                <Input id="startDate" type='date' onChange={this.handleChange}/>
                            </FormGroup>
                            <Button>Add Project</Button>
                        </Col>
                        <Col>{" "}</Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
