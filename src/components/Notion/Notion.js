import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Notion extends Component {
    state = {
        notion: '',
        goals: '',
        songName: '',
        moodRating: 10,
    }

    handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
}

handleSubmit = async event => {
    event.preventDefault()
    await this.PaymentResponse.handle
}