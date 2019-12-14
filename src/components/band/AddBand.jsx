import React, { Component } from 'react'
import {Form ,FormGroup  } from 'reactstrap'
import FormRow from './FormRow'
import AddToRoster from './AddToRoster'
import requester from '../../Helpers/requster'



export default class AddBand extends Component {
    state={
        BandName      : "",
        BandEmail     : "",
        NumberOfTracks: 0 ,
        Genre         : "",
        StartDate     : new Date(),
        Discount      : "",
        PricePerSong  : "",
        AboutTheBand  : "",
        ProjectName   : ""
    }

    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    handleDateChange=(date)=>this.setState({StartDate:date})

    handleSubmit=(e)=>{
        e.preventDefault()
        requester.add.band(this.state)
    }
    render() {
        return (
            <div className='container-fluid w-50'>
           <Form>
                <FormGroup className='text-center'>

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
