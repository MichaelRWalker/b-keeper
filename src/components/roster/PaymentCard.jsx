import React, { useState } from "react";
import {Collapse,Card,CardBody,CardHeader,CardTitle} from 'reactstrap';
import requester from "../../Helpers/requester";


export default function PaymentCard (props){
        const {date,amount} = props.payment;
        const [edit , setEdit] = useState(false);
        const [isOpen , setIsOpen] = useState(false);
        const [payment, setPayment] = useState({ ...props.payment });

        const handleHide = () =>setIsOpen(!isOpen);

        const handleChange = e => {
            const { id, value } = e.target;
            const updatedPayment = { ...payment, ...{ [id]: value } };
                setPayment(updatedPayment);
        };

        const handleEditClick = () => {
        setEdit(!edit);
        if (edit){
            requester.payment.update(props.artist._id,props.project._id, payment)
        }
    };
        const handleCancelClick = () =>{
            const {artist,project,payment}=props;
            const artistId = artist._id;
            const projectId = project._id;
            const paymentId = payment._id;
            if (edit) setEdit(!edit);
            else {
            window.confirm("Are you sure you want to delete this session ?")
                && requester.payment.delete(artistId,projectId,paymentId)
                             .then(() => (window.location = "/roster"))
            }
        };
    return(
        <div>
        <Card className='mr-2 mt-2 text-center' >
                        <CardHeader className='text-center' onClick={handleHide}>Payment</CardHeader>
                            <Collapse isOpen={isOpen}>
                                <CardTitle>Session Details</CardTitle>
                                <CardBody >
                                    <div className="row">
                                        <div className='col  '><label>Date</label></div>
                                        <div className='col '>{edit ? (<input onChange={handleChange}id="action"type="text" defaultValue={date}/>) :date}</div>
                                    </div>
                                    <div className="row">
                                        <div className='col '><label>Amount</label></div>
                                        <div className='col '>{edit ? <input onChange={handleChange}id="cost"type="number"defaultValue={amount}/>:amount}</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className='col '><button className='btn btn-primary pr-4 pl-4 mt-2 ml-1 mb-1'onClick={handleEditClick}>{edit ? "Submit" : "Edit "}</button></div>
                                        <div className='col '><button className='btn btn-danger order-last mt-2 mb-1 pr-3 pl-3'onClick={handleCancelClick}>{edit ? "Cancel" : "Delete "}</button></div>
                                    </div>
                                </CardBody>
                            </Collapse>
                    </Card>
        </div>
    )
}