import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NotionForm from '../../components/Notion/NotionForm'
import './HomePage'

const HomePage = (props) => {
    let homepage = props.user ?
        <div>
            <NotionForm user={props.user} />
        </div>
        :
        <></>
    return (
        <div>
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            {homepage}
        </div>
    )

}

export default HomePage; 
