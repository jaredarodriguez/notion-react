import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NotionForm extends Component {
    state = {
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

    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        return (
            <form className="blog-form" onSubmit={this.handleSubmit}>
                <p>{this.state.notion}</p>
                <div>
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
                <button className='button-primary' onClick={this.props.handleToggle}>close</button>
                <input type="submit" />
            </form>
        )
    }

}
export default NotionForm 