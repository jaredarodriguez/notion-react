import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NotionForm from '../../components/Notion/NotionForm'

class EditPage extends Component {

    render() {
        const { title, notion, goals, songName, moodRating, id } = this.props.location.state
        return (
            <>
                <NavBar user={this.props.user} handleLogout={this.props.handleLogout} />
                <NotionForm user={this.props.user} editTitle={title} editNotion={notion}
                    editGoals={goals} editSongName={songName} editMoodRating={moodRating} id={id} />
            </>
        )
    }
}


export default EditPage;
