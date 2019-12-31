import React, { useState } from "react";
import {Collapse, Button} from 'reactstrap';
import ProjectCard from './ProjectCard'




export default function ArtistArea(props){
    const {name,members,email,notes,genre,_id,projects} = props.artist;
    const [isOpen , setIsOpen] = useState(false);
    let sessions = projects.map(project=>project.sessions);
    let tracks = 0;


    projects.forEach(project=>tracks+=project.tracks);
    sessions = sessions.flat();
        if (props.isChecked && sessions.length === 0)return null

    return [<tr className='text-center' key={name} onClick={()=>setIsOpen(!isOpen)} >
                <td>{tracks}</td>
                <td>{name}</td>
                <td>{genre}</td>
                <td>{projects.length}</td>
                <td>{sessions.length}</td>
            </tr>,
            <tr key={_id} hidden={!isOpen}>
                <td className="td" colSpan={6}>
                    <Collapse isOpen={isOpen} >
                        <div className="inner">
                            <div className="form-group ">
                                <h3 className='text-center'>{name}</h3>
                                <div className="container-fluid overflow-hidden">
                                    <div><strong>Members</strong></div>
                                    {members && members.map(member=> <div key={member}>{member}</div>)}
                                    <br/>
                                    <div><strong> Email</strong></div>
                                    <div>{email}</div>
                                    <br/>
                                    <div><strong>Notes</strong></div>
                                    <div>{notes}</div>
                                    <br/>
                                    {projects.length > 0 &&
                                    projects.map(project=>
                                        <ProjectCard
                                        key={project._id}
                                        artist={props.artist}
                                        project={project}
                                        sessions={project.sessions}
                                        />)}
                                        <Button className='mt-2' onClick={()=>props.handleClick(_id)}>Remove Artist</Button>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </td>
            </tr>
        
        ] 
  }

