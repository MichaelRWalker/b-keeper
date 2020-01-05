
import React, { Component } from 'react'
import {Table} from 'reactstrap'
import ArtistArea from './ArtistArea';
import requester from '../../Helpers/requester';


export default class Roster extends Component {
    _id;
constructor(props){
    super(props);
    this.state = {
        artists:[],
        check:false
    }
}
    componentDidMount(){
        requester.artist.get()
        .then(res=>this.setState({artists:res.data}))
        .catch(err=>alert(err))
    }

    handleClick=(id)=> {
        let confirmOne = window.confirm('Are you sure you want to delete artist ?');
        if (!confirmOne) return;
        let confirmTwo = window.confirm('This cannot be undone are you positive');
        if(!confirmTwo)  return;
        console.log(confirmOne,confirmTwo);
        requester.artist.delete(id).then(()=>{
            requester.artist.get().then(res=>{
                this.setState({artists:res.data});
                window.location = '/roster'
            })
        })
            }
    ;
    render() {
        const {artists,check} = this.state;
        return (
            <div className='table-responsive'>
                <Table bordered hover className='text-center'>
                    <thead className='thead thead-dark'>
                        <tr>
                            <th>Tracks</th>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Projects</th>
                            <th>Sessions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {artists && artists.map( artist => <ArtistArea handleClick={this.handleClick} key={artist._id} artist={artist} isChecked={check}/>)}
                    </tbody>
                </Table>
                </div>
        )
    }
}
