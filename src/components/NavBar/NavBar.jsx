import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/App/App.css'
import './NavBar.css';
//here's what props are expected *handleLogout *user 
const NavBar = (props) => {
    let nav = props.user ?
        <div>

            <Link to='/notions'>YOUR NOTIONS</Link>
            <Link to='/' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </div>;

    return (
        <>
            <header className='header-footer'>N O T I O N </header>
            <div className='NavBar'>
                {nav}
            </div>
        </>
    );
};

export default NavBar;