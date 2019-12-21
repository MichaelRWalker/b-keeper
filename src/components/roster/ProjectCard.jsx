import React, { useState } from "react";
import {Collapse,Card,CardBody,CardHeader,CardTitle,Input} from 'reactstrap';
import SessionCard from "./SessionCard";
import requester from "../../Helpers/requester";
import PaymentCard from "./PaymentCard";




const parseLength = (length) => length < 4 ? 'center': 'start'
const bootstrapStyle = (length) => `row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 justify-content-${parseLength(length)}`


export default function ProjectCard (props){
        const {sessions,artist}=props
        const [isOpen , setIsOpen] = useState(false);
        const {tracks,deposit,projectName,finishDate,startDate,payments} = props.project
        const [edit , setEdit] = useState(false);
        const [project, setProject] = useState({ ...props.project });

        const handleHide = () =>setIsOpen(!isOpen)

        const handleChange = e => {
            const { id, value } = e.target;
            const updatedProject = { ...project, ...{ [id]: value } };
                setProject(updatedProject);
        };

        const handleEditClick = () => {
        setEdit(!edit);
        if (edit){
            requester.project.update(props.artist._id,props.project._id, project)
            };
        };

    const handleCancelClick = () => {
        if (edit) setEdit(!edit);
        if (!edit) {
        window.confirm("Are you sure you want to delete this Project ?")
        && window.confirm("Are you REALLY sure you want to delete this Project ?")
        && requester.project.delete(props.artist._id, props.project._id)
                           .then(() => (window.location = "/roster"))
        }
    };

    return (
                <div className='accordion'>
                    <Card className='mr-2 mt-2 text-center' >
                        <CardHeader className='text-center' onClick={handleHide} > {projectName} </CardHeader>
                            <Collapse isOpen={isOpen}>
                                <CardTitle className='text-bold'>ProjectDetails</CardTitle>
                                <CardBody >
                                    <div className="row">
                                        <div className='col  '>
                                            <label>Tracks</label>
                                        </div>
                                        <div className='col '>
                                            {edit ? (<Input className='w-75'onChange={handleChange}id="action"type="number" defaultValue={tracks}/>) :tracks}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col '>
                                            <label>Deposit</label>
                                        </div>
                                        <div className='col '>
                                            {edit ? <Input  className='w-75' onChange={handleChange}id="cost"type="number"defaultValue={deposit}/>:deposit}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col '>
                                            <label>Start Date</label>
                                        </div>
                                        <div className='col '>
                                            {edit ? <Input type="date" className='w-75' id="startDate" placeholder="date placeholder" />:startDate}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col '>
                                            <label>Finish Date</label>
                                        </div>
                                        <div className='col '>
                                            {edit ? <Input type="date" className='w-75' id="finishDate" placeholder="date placeholder" />:finishDate}
                                        </div>
                                    </div>

                                    <h3>Sessions</h3>
                                    <Collapse isOpen={isOpen}>
                                    {sessions.length > 0 && <div className={bootstrapStyle(sessions.length)}>
                                    {sessions.map(session=> <SessionCard key={session._id} project={props.project} artist={artist} session={session}/>)}
                                    </div>}
                                    </Collapse>

                                    <br/>

                                    <h3>Payments</h3>
                                    <Collapse isOpen={isOpen}>
                                    {payments.length > 0 && <div className={bootstrapStyle(sessions.length)}>
                                    {payments.map(payment=> <PaymentCard key={payment._id} payment={payment}/>)}
                                    </div>}
                                    </Collapse>
                                    <br/>
                                    <div className='row'>
                                    <div className='col '><button className='btn btn-primary btn-block mt-2'          onClick={handleEditClick}>{edit ? "Submit" : "Edit "}</button></div>
                                    <div className='col '><button className='btn btn-danger order-last btn-block mt-2'onClick={handleCancelClick}>{edit ? "Cancel" : "Delete "}</button></div>
                                    </div>
                                </CardBody>
                            </Collapse>
                    </Card>
                </div>
        )       

}