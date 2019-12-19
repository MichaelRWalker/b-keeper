import React, { Component } from 'react'
import {Table} from 'reactstrap'
import requester from '../../Helpers/requester'
import LedgerRow from './LedgerRow'


export default class Ledger extends Component {
    state={
        artists:[],
    }

    componentDidMount(){
        requester.get.bands()
        .then(res=>this.setState({artists:res.data}))
        .then(()=>console.log(this.state.artists))
    }

    render() {
        return (
            <div className='container w-75 '>
                <Table className='table table-hover table-bordered text-center'>
                    <thead className='thead thead-dark'>
                        <tr>
                            <th>Artist</th>
                            <th>Payment</th>
                            <th>Tracks</th>
                            <th>Price per Track</th>
                            <th>Discount</th>
                            <th>Amount Owed</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.artists.length > 0 &&(
                        this.state.artists.map(artist=><LedgerRow key={artist.name} artist={artist} />)
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}
