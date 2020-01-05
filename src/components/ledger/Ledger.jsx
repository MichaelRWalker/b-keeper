import React, { Component } from 'react'
import {Table} from 'reactstrap'
import requester from '../../Helpers/requester'
import LedgerRow from './LedgerRow'

export default class Ledger extends Component {
    state={
        artists:[],
        responsive:' '
    };

    componentDidMount(){
        requester.artist.get()
        .then(res=>this.setState({artists:res.data}));
        window.addEventListener('resize',this.handleResize)
    }
    handleResize=()=>{
        let current = this.state.responsive;
        let temp = window.innerWidth < 600 ?'table-sm':' ';
        if(current!==temp)this.setState({responsive:temp})
        
    };
    componentWillUnmount(){
        window.removeEventListener('onresize',this.handleResize)
    }

    render() {
        return (
            
            <div className='container table-responsive'>
                <Table className={`table ${this.state.responsive} table-hover table-bordered text-center`}>
                    <thead className='thead thead-dark'>
                        <tr>
                            <th>Artist</th>
                            <th>Payment</th>
                            <th>Tracks</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Owed</th>
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
