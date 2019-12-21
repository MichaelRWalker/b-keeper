import React, { Component } from 'react'

const rate = 150

const getTotalPayments = (arr) =>{
    let totalPaid = 0
    arr.forEach(member=>member.payments.forEach(payment=>totalPaid+=payment.amount))
    return totalPaid
}

const getTotalOwed = (totalTracks,totalPayments,discount) => [`${totalTracks * rate - totalPayments - discount}`,` (${totalTracks * rate - discount})`];

const getTotalTracks = (arr)=>{
    let totalTracks = 0 
    arr.forEach(project=>totalTracks+=project.tracks)
    return totalTracks
};


export default class LedgerRow extends Component {
    state={
        totalOwed:0,
        totalTracks:0,
        totatPayments:0,
    }

    componentDidMount(){
        let totalTracks = getTotalTracks(this.props.artist.projects);
        let totalPayments = getTotalPayments(this.props.artist.projects);
        let totalOwed = getTotalOwed(totalTracks,totalPayments,0);
        this.setState({
            totalTracks,
            totalPayments,
            totalOwed
        })

    }

    render() {
        return (
            <tr>
                <td>{this.props.artist.name}</td>
                <td>{this.state.totalPayments}</td>
                <td>{this.state.totalTracks}</td>
                <td>{rate}</td>
                <td>{0}</td>
                <td>{this.state.totalOwed}</td>
            </tr>
        )
    }
}
