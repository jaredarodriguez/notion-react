import React, { Component } from 'react'
import './NotionForm'

class Notion extends Component {
    render() {
        return (
            <div className="notionCard">
                <h1>{this.props.title}</h1>
                <p>{this.props.notion}</p>
                <p>{this.props.goals}</p>
                <p>{this.props.songName}</p>
                <p>{this.props.moodRating}</p>
            </div>

        )
    }
}
export default Notion; 