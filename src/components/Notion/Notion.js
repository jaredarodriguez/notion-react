import React, { Component } from 'react'
import './NotionForm'
import { deleteOne } from '../../services/notion-api'

class Notion extends Component {

    handleClick = async () => {
        await deleteOne(this.props.id)
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