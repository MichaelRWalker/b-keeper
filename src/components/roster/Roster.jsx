import React, { Component } from 'react'
import {Table,Button} from 'reactstrap'
import ArtistArea from './ArtistArea';
import requester from '../../Helpers/requster';


export default class Roster extends Component {
constructor(props){
    super(props);
    this.state = {
        artists:[],
        check:false
    }
}
    componentDidMount(){
        requester.get.bands()
        .then(res=>this.setState({artists:res.data}))
        .catch(err=>alert(err))
    }

    render() {
        const {artists,check} = this.state
        return (
            <div className='container'>
            <Button className='m-1' onClick={()=>this.setState({check:!check})}>{check ? "Show All":"Show Artist with sessions"}</Button>
                <Table bordered hover className='text-center'>
                    <thead className='thead thead-dark'>
                        <tr>
                            <th>Tracks</th>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Sessions</th>
                            <th>StartDate</th>
                        </tr>
                    </thead>
                    <tbody>
                    { artists.length > 0 && artists.map( artist => <ArtistArea key={artist._id} artist={artist} isChecked={check}/>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}
