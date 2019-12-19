import React, { Component } from 'react'
import {Form,FormGroup,Label,Input,Col,Button} from 'reactstrap'
import requester from '../../Helpers/requester'





export default class AddSession extends Component {
    state={
        artists:[],
        readyToSubmit:false,
        Hours :null,
        Cost  :null,
        Action:null,
        Band  :null

    }

    componentDidMount(){
        requester.artist.get()
        .then(res=>this.setState({artists:res.data}))
        .then(()=>this.setState({Band:this.state.artists[0].name}))
    }

    handleSubmit=(e)=>{
        const {Hours:hours , Cost:cost , Action:action , Band:band} = this.state
        const session ={ action, band, cost, hours }

        e.preventDefault()

        requester.session.post()

        this.setState({hours:null,cost:null,action:null},()=>{

            document.getElementById('sessionForm').reset()
            
            this.setReadyStatus()
        })
    }
    handleChange=(e)=>this.setState({[e.target.id]:e.target.value},this.setReadyStatus)
    
    
    setReadyStatus=()=>{ 
        Object.values(this.state).includes(null) ? 
            this.setState({readyToSubmit:false}):
            this.setState({readyToSubmit:true})
    }

    render() {
        return (
            <div className='container w-50'>
                <Form id='sessionForm' >
                    <FormGroup row >
                        <Label md={2}>Band</Label>
                        <Col>
                            <Input id='Band' onChange={this.handleChange} md={2} type='select'>
                                {this.state.artists.map(artist=><option key={artist.name}>{artist.name}</option>)}
                            </Input>
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
