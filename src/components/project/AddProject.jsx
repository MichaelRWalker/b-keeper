import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap'

export default class AddProject extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Row>
                        <Col></Col>
                        <Col>
                            <FormGroup>
                                <Label>Tracks</Label>
                                <Input placeholder='Number of Tracks' type='number'></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Deposit</Label>
                                <Input placeholder='250' type='number'></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Project Name</Label>
                                <Input placeholder='The name of the project' type='text'></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Start Date</Label>
                                <Input type='date'></Input>
                            </FormGroup>
                            <Button>Add Project</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
