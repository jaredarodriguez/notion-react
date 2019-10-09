import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { create, update } from '../../services/notion-api';


class NotionForm extends Component {
    state = {
        title: this.props.editTitle || '',
        notion: this.props.editNotion || '',
        goals: this.props.editGoals || '',
        songName: this.props.editSongName || '',
        moodRating: this.props.editMoodRating || 10,
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        const { title, notion, goals, songName, moodRating } = this.state
        const email = this.props.user.email
        event.preventDefault()
        if (this.props.id)
            await update(title, notion, goals, songName, moodRating, email, this.props.id)
        else {
            const initialFetch = await create(title, notion, goals, songName, moodRating, email)
            const fetchJSON = await initialFetch.json()
            alert('thank you for your post')
        }
        this.setState({ title: '', notion: '', goals: '', songName: '' })
    }

    render() {
        return (
            <form className="blog-form" onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        {' '}
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </div>
                    <p>{this.state.notion}</p>
                    <div>
                        {' '}
                        <label>Notion</label>
                        <textarea
                            type="text"
                            name="notion"
                            onChange={this.handleChange}
                            value={this.state.notion}
                        />
                    </div>
                    <div>
                        <label>Goals</label>
                        <input
                            type="text"
                            name="goals"
                            onChange={this.handleChange}
                            value={this.state.goals}
                        />
                    </div>
                </div>
                <label>Song Name</label>
                <input
                    type="text"
                    name="songName"
                    onChange={this.handleChange}
                    value={this.state.songName}
                />
                <input type="submit" />
            </form>
        )
    }

}
export default NotionForm 