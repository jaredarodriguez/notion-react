import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Notion from '../../components/Notion/Notion';


const NotionsPage = (props) => {
    const notionData = props.notionData
    let collection
    if (notionData) {
        collection = notionData.map(function (d) {
            return <div>
                <Notion title={d.title} notion={d.notion}
                    goals={d.goals} songName={d.songName}
                    moodRating={d.moodRating} />
            </div>
        })
    }
    return (
        <>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            {collection}
        </>
    )
}

export default NotionsPage

