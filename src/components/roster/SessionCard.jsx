import React, { useState} from 'react'
import {Card,CardHeader,Collapse,CardTitle,CardBody} from 'reactstrap'
import requester from '../../Helpers/requester';



export default function SessionCard(props){
  const [isOpen , setIsOpen ] = useState(false);
  const [session, setSession] = useState({ ...props.session });
  const [edit , setEdit] = useState(false);
  const {action , cost , hours } = session;

    const handleHide = () =>setIsOpen(!isOpen);

    const handleEditClick = () => {
        setEdit(!edit);
        if (edit){
            requester.session.update(props.artist._id,props.project._id,props.session._id, session)
                .catch(err=>console.warn(err))
        };
    };

    const handleCancelClick = () => {
        if (edit) setEdit(!edit);
        if (!edit) {
        window.confirm("Are you sure you want to delete this session ?")
        && requester.session.delete(props.artist._id, props.session._id)
                           .then(() => (window.location = "/roster"))

    }
  };
  const handleChange = e => {
    const { id, value } = e.target;
    const updatedSession = { ...props.session, ...{ [id]: value } };
    setSession(updatedSession);
  };
    
        return  (
            <div className='accordion'>
                    <Card className='mr-2 mt-2 text-center' >
                        <CardHeader className='text-center' onClick={handleHide}>{action}</CardHeader>
                            <Collapse isOpen={isOpen}>
                                <CardTitle>Session Details</CardTitle>
                                <CardBody >
                                    <div className="row">
                                        <div className='col  '><label>Action</label></div>
                                        <div className='col '>{edit ? (<input onChange={handleChange}id="action"type="text" defaultValue={action}/>) :action}</div>
                                    </div>
                                    <div className="row">
                                        <div className='col '><label>Price</label></div>
                                        <div className='col '>{edit ? <input onChange={handleChange}id="cost"type="number"defaultValue={cost}/>:cost}</div>
                                    </div>
                                    <div className="row">
                                        <div className='col '><label>Hours</label></div>
                                        <div className='col '>{edit ? <input onChange={handleChange}id="hours"type="number"defaultValue={hours}/>:hours}</div>
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

