import React, { Component } from 'react';
import { Router } from '@reach/router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthenticationContext from './components/AuthenticationContext'

import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import EventPage from './pages/EventPage';
import "./App.css";


import FooterNavigation from './components/FooterNavigation';



//dummy data for testing (must pass down to props where we would
//be getting data from our database... ugly prop drilling here)
import { artistList, eventList, userList } from './dummyData';

// Simulate a logged in user w/ relevant data
const user = {
  name: "Haffed Ali",
  tagLine: "Maker Mover Producer",
  photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Haffed.svg',
  uid: '1234'
}


class App extends Component {
  constructor(props) {
    super(props)


    this.authenticateUser = () => {
      let user = this.props.firebase.auth().currentUser;
      this.setState({
        isAuthenticated: true,
        userInfo: user
      })
    }

    this.deAuthenticateUser = () => {
      this.props.firebase.auth().signOut()
      this.setState({
        isAuthenticated: false,
        userInfo: null
      })
    }

    this.state = {
      isAuthenticated: false,
      authenticateUser: this.authenticateUser,
      deAuthenticateUser: this.deAuthenticateUser,
      userInfo: null
    }

    this.theme = createMuiTheme();
  }


  render() {
    return (
      <AuthenticationContext.Provider value={this.state}>
        <MuiThemeProvider theme={this.theme}>
          <CssBaseline />
          <Router>
            <LandingPage path='/' firebase={this.props.firebase} />
            <ProfilePage path='user' user={user}/>
            <EventPage path='event' user={user} />
          </Router>
          <FooterNavigation />
        </MuiThemeProvider>
      </AuthenticationContext.Provider>
    )
  }
}

export default App;
