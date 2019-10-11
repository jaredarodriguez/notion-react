import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotionForm'
import { deleteOne } from '../../services/notion-api'

class Notion extends Component {

    handleClick = async () => {
        await deleteOne(this.props.id)
        this.props.update()
    }


    render() {
        const { title, notion, goals, songName, moodRating, id } = this.props
        return (
            <div className="notionCard">
                <h1>{title}</h1>
                <p>{notion}</p>
                <p>{goals}</p>
                <p>{songName}</p>
                <p>{moodRating}</p>
                <button onClick={this.handleClick}>X</button>
                <Link to={{
                    pathname: '/edit',
                    state: {
                        title, notion, goals, songName, moodRating, id
                    }
                }}>EDIT</Link>
            </div >

        )
    }
}
export default Notion; 