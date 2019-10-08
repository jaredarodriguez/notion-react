import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Notion extends Component {
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
}

handleSubmit = event => {
    event.preventDefault()

}
export default Notion