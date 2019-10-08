import React, { Component } from 'react'
import './NotionForm'

class Notion extends Component {

    handleClick = async () => {
        await fetch(`http://localhost:3001/api/notions/${this.props.id}`, {
            method: 'DELETE'
        })
        this.props.update()
    }

    render() {
        return (
            <div className="notionCard">
                <h1>{this.props.title}</h1>
                <p>{this.props.notion}</p>
                <p>{this.props.goals}</p>
                <p>{this.props.songName}</p>
                <p>{this.props.moodRating}</p>
                <button onClick={this.handleClick}>X</button>
            </div>

        )
    }
}
export default Notion; 