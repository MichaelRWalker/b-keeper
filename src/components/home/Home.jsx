import React, { Component } from 'react'
import { Badge, Card, CardHeader, CardBody, Row, Col, Collapse } from 'reactstrap'

export default class Home extends Component {
state={
    numOfArtists:0,
    totalTracks:0,
    isOpenA:true,
    isOpenB:false
}

    render() {
        const artists = this.props.user.artists;
        return (
            <div className='container text-center'>
                <h1> Welcome Back, {this.props.user.name} <Badge>Creator</Badge></h1>
                <br/>
                <div className='container'>
                <Card>
               <CardHeader onClick={()=>{this.setState({isOpenA:!this.state.isOpenA})}}><h2><b>Studio Stats</b></h2></CardHeader>
               <Collapse isOpen={this.state.isOpenA}>
               <CardBody>
                <Row>
                    <Col>
                        <h2>Artist with projects</h2>
                        <h3>{artists && artists.filter(artist=>artist.projects.length>0).length}</h3>
                    </Col>
                    <Col>
                        <h2>Amount Owed To Studio</h2>
                        <h3>{`$ 2000`}</h3>
                    </Col>
                    <Col>
                        <h2>Projects</h2>
                        <h3>{`20`}</h3>
                    </Col>
                </Row>
               </CardBody>
               </Collapse>
               </Card>
                <Card>
                <CardHeader onClick={()=>{this.setState({isOpenB:!this.state.isOpenB})}}>
                            <h2>
                                <b>
                                    Appointments
                                </b>
                            </h2>
                </CardHeader>
                <Collapse isOpen={this.state.isOpenB}>
                <CardBody>
                <Row>
                    <Col>
                        <h2>Appointments Coming Up</h2>
                        <h3>{artists && artists.filter(artist=>artist.projects.length>0).length}</h3>
                    </Col>
                    <Col>
                        <h2>Next Appointment</h2>
                        <h3>{`Tomorrow`}</h3>
                    </Col>
                    <Col>
                        <h2>Last Appointment</h2>
                        <h3>{`yesterday`}</h3>
                    </Col>
                </Row>
               </CardBody>
               </Collapse>
               </Card>
               </div>
            </div>
        )
    }
}
