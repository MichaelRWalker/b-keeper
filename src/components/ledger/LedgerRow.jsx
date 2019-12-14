import React, { Component } from 'react'

export default class LedgerRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.artist.name}</td>
                <td>{0}</td>
                <td>{this.props.artist.tracks}</td>
                <td>{150}</td>
                <td>{0}</td>
                <td>{this.props.artist.tracks * 150 - 0}</td>
            </tr>
        )
    }
}
