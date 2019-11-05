import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthenticationContext from './components/AuthenticationContext'

import LandingPage from './pages/LandingPage';
import "./App.css";




import RadioButtons from './components/RadioButtons'
import FooterNavigation from './components/FooterNavigation';
import Footer from './components/FooterClass';

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
          </Router>
          <FooterNavigation />
        </MuiThemeProvider>
      </AuthenticationContext.Provider>
    )
  }
}

export default App;
