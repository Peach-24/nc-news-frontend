import './App.css';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Latest from './Components/Latest';
import Popular from './Components/Popular';
import Article from './Components/Article';
import ErrorMessage from './Components/ErrorMessage';
import * as api from './api';

import React, { Component } from 'react';

class App extends Component {
  state = {
    loggedInUser: null,
    possibleUsers: [],
  };

  componentDidMount() {
    api.fetchUsers().then((users) => {
      this.setState({ possibleUsers: users.map((user) => user.username) });
    });
  }
  logout = () => {
    this.setState({ loggedInUser: null });
  };
  login = (newUser) => {
    if (this.state.possibleUsers.includes(newUser)) {
      this.setState({ loggedInUser: newUser });
    } else {
      alert(
        "That user doesn't exist. Try again! \n\nHINT: Try using one of the writer's usernames..."
      );
    }
  };

  render() {
    return (
      <div className='App'>
        <Router>
          <Home
            path='/'
            loggedInUser={this.state.loggedInUser}
            logout={this.logout}
            login={this.login}
          />
          <Latest path='/latest/:topic' />
          <Popular path='/popular/:topic' />
          <Article
            path='/articles/:article_id'
            loggedInUser={this.state.loggedInUser}
            logout={this.logout}
            login={this.login}
          />
          <ErrorMessage default errorMessage='Page not found... ☠️' />
        </Router>
      </div>
    );
  }
}

export default App;
