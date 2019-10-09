import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Notion from '../../components/Notion/Notion';
import { notionsPerUser } from '../../services/notion-api';

class NotionsPage extends Component {
    state = {
        apiResponse: null,
        user: null
    }

    componentDidMount() {
        this.componentUpdate()
    }

    componentUpdate = async () => {
        if (this.props.user) {
            const result = await notionsPerUser(this.props.user.email);
            this.setState({ apiResponse: result })
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

