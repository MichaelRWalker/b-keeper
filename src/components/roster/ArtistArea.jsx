import React, { useState } from "react";
import {Collapse} from 'reactstrap';
import SessionCard from "./SessionCard";

const parseLength = (length) => length < 4 ? 'center': 'start'
const bootstrapStyle = (length) => `row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 justify-content-${parseLength(length)}`

export default function ArtistArea(props){
    const {name,tracks,genre,sessions,startDate,_id} = props.artist
    const [isOpen , setIsOpen] = useState(false)

        if (props.isChecked && sessions.length === 0){return null};

    return [<tr className='text-center' key={name} onClick={()=>setIsOpen(!isOpen)} >
                <td>{tracks}</td>
                <td>{name}</td>
                <td>{genre}</td>
                <td>{sessions.length}</td>
                <td>{startDate.slice(0,startDate.length-14)}</td>
            </tr>,
            <tr key={_id} hidden={!isOpen}>
                <td className="td" colSpan={6}>
                    <Collapse isOpen={isOpen} >
                        <div className="inner">
                            <div className="form-group ">
                                <h3 className='text-center'>{name}</h3>
                                <div className="container-fluid overflow-hidden">
                                    {sessions.length > 0 && <h4 className='text-center'>Sessions</h4>}
                                    {sessions.length > 0 && (
                                        <div className={bootstrapStyle(sessions.length)}>
                                            {sessions.map(session=> <SessionCard key={session._id} artist={props.artist} session={session}/>)}
                                        </div>  
                                    )}
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </td>
            </tr>
        
        ] 
  }

