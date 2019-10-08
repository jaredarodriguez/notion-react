import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Notion from '../../components/Notion/Notion';

class NotionsPage extends Component {
    state = {
        apiResponse: null,
        user: null
    }

    componentDidMount() {
        if (this.props.user) {
            this.setState()
            fetch(`http://localhost:3001/api/notions/user/${this.props.user.email}`)
                .then(res => res.json())
                .then(res => this.setState({ apiResponse: res }))
                .catch(err => err);
        }
    }

    componentUpdate = () => {
        if (this.props.user) {
            fetch(`http://localhost:3001/api/notions/user/${this.props.user.email}`)
                .then(res => res.json())
                .then(res => this.setState({ apiResponse: res }))
                .catch(err => err);
        }
    }
    render() {
        const notionData = this.state.apiResponse
        let collection
        if (notionData) {
            collection = notionData.map((d) => {
                return <div>
                    <Notion title={d.title} notion={d.notion}
                        goals={d.goals} songName={d.songName}
                        moodRating={d.moodRating} id={d._id} update={this.componentUpdate} />
                </div>
            })
        }

        return (
            <>
                <NavBar user={this.props.user} handleLogout={this.props.handleLogout} />
                {collection}
            </>
        )
    }
}

export default NotionsPage

