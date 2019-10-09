import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage'
import SignupPage from '../SignupPage/SignupPage'
import userService from '../../utils/userService';
import LoginPage from '../LoginPage/LoginPage';
import NotionForm from '../../components/Notion/NotionForm';
import NotionsPage from '../NotionsPage/NotionsPage';
import EditPage from '../EditPage/EditPage';

class App extends Component {
  state = {
    apiResponse: null,
    user: null
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    })
  }
  handleLogout = () => {
    userService.logout()
    this.setState({
      user: null
    })
  }


  /* ---- Lifecycle Methods ----*/
  // componentDidMount = () => {

  // }

  render() {
    return (
      <div>
        <div className="App">

        </div>
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />}
          />


          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />}
          />
          <Route exact path='/' render={() =>
            <HomePage user={this.state.user} handleLogout={this.handleLogout}
            />
          } />
          <Route exact path='/notions' render={() =>
            <NotionsPage user={this.state.user} handleLogout={this.handleLogout} notionData={this.state.apiResponse} />
          } />
          {/* <Route exact path '/edit' render={() => */}
          <EditPage user={this.state.user} handleLogout={this.handleLogout} />} />
        </Switch>

      </div>
    )
  };

}

export default App;