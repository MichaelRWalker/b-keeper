import React, { Component } from 'react'
import { Label , Input } from 'reactstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


class CustomInput extends Component{
    render(){
        return <Input className='d-flex mr-5 pr-5 pl-2 form-control-plaintext bg-white border border-gray' readOnly value={this.props.value} onClick={this.props.onClick}></Input>
    }
} 
    

export default function FormRow(props) {
    const innerEl = (hasDate) => hasDate ? (
        <DatePicker selected={props.handleDateChange[0]} onChange={props.handleDateChange[1]} customInput={<CustomInput/>} />
        ):(
        <Input placeholder={props.name} id={props.name} onChange={props.handleChange} />
        )
            return (
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2  '>
                    <div className='col mt-2'>
                        <Label>{props.name}</Label>
                    </div>
                    <div className='col mt-2'>
                       {innerEl(props.name.includes('Date'))}
                    </div>
                </div>
                ) ; 
}

