import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../src/pages/SignupPage/SignupPage'
import userService from './utils/userService';
// import LoginPage from './pages/LoginPage/LoginPage';

class App extends Component {
  state = {
    apiResponse: "",
    users: null
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser
    })
  }
  handleLogout = () => {
    userService.logout()
    this.setState({
      user: null
    })
  }


  /* ---- Lifecycle Methods ----*/
  componentDidMount() {
    fetch('http://localhost:3001/api/notions')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />}

          />



        </Switch>

        <div className="App">
          <header className='header-footer'>N O T I O N </header>
          <p>{this.state.apiResponse}</p>
        </div>
      </div>
    )
  };

}

export default App;