import React, { Component } from 'react'
import {Form ,FormGroup  } from 'reactstrap'
import FormRow from './FormRow'
import AddToRoster from './AddToRoster'
import requester from '../../../Helpers/requester'



export default class AddBand extends Component {
    state={
        BandName      : "",
        BandEmail     : "",
        Genre         : "",
        StartDate     : new Date(),
        Members       : [],
        Notes  : "",
    }

    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
        
    }
    handleDateChange=(date)=>this.setState({StartDate:date})

    handleSubmit=(e)=>{
        e.preventDefault()
        const {BandName:name,BandEmail:email,Genre:genre,StartDate:startDate,Members,Notes:notes}=this.state
        const members =[]
        Members && Members.split(',').forEach(member=>members.push(member))
        const artist = {name,email,genre,startDate,members,notes}
         requester.artist.post(artist)
        .then(res=>console.log(res))
        .catch(error=>console.error(error))
        e.target.reset()
    }
    render() {
        return (
            <div className='container-fluid w-50'>
           <Form onSubmit={this.handleSubmit}>
                <FormGroup className='text-center'>
                        <small>Members should be separated by commas</small>
                    {
                        Object.keys(this.state)
                        .map(field=><FormRow  
                        name={field}  key={field}  
                        handleDateChange={[this.state.StartDate,this.handleDateChange]}  
                        handleChange={this.handleChange}   
                        />)
                    }
                </FormGroup>
                <AddToRoster handleSubmit={this.handleSubmit}/>
           </Form>
           </div>
        )
    }
}
