
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
                    {artists && artists.map( artist => <ArtistArea key={artist._id} artist={artist} isChecked={check}/>)}
                    </tbody>
                </Table>
                </div>
        )
    }
}
