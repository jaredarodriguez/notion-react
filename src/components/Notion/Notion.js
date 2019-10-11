import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotionForm'
import { deleteOne } from '../../services/notion-api'
import M from 'materialize-css';

class Notion extends Component {

    handleClick = async () => {
        await deleteOne(this.props.id)
        this.props.update()
    }

    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }


    render() {
        const { title, notion, goals, songName, moodRating, id } = this.props
        return (
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content grey-text">
                            <span class="card title">{title}</span>
                            <h4>{notion}</h4>
                            <p>{goals}</p>
                            <p>{songName}</p>
                            <p>{moodRating}</p>
                            <button onClick={this.handleClick}>X</button>
                            <Link to={{
                                pathname: '/edit',
                                state: {
                                    title, notion, goals, songName, moodRating, id
                                }
                            }}>EDIT</Link>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
export default Notion;
