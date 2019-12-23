import React from 'react'
import { Button } from 'reactstrap'
export default function AddToRoster(props) {
    return (
        <div className='row'>
            <div className='col-3'></div>
            <Button color='primary col' onSubmit={props.handleSubmit} >Add to Roster</Button>
            <div className='col-2'></div>
        </div>
    )
}