import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NotionForm extends Component {
    state = {
        title: '',
        notion: '',
        goals: '',
        songName: '',
        moodRating: 10,
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        const { title, notion, goals, songName, moodRating } = this.state
        event.preventDefault()
        const initialFetch = await fetch('http://localhost:3001/api/notions',
            {
                method: 'post', body: JSON.stringify({
                    title, notion, goals, songName, moodRating,
                    email: this.props.user.email
                }), headers: {
                    "content-type": "application/json"
                }
            })
        console.log(this.props.user);
        const fetchJSON = await initialFetch.json()
        return await fetchJSON
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
                {/* <button className='button-primary' onClick={this.props.handleToggle}>close</button> */}
                <input type="submit" />
            </form>
        )
    }

}
export default NotionForm 