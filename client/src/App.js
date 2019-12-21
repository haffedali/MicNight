// Dependencies
import React, { Component } from 'react';
import { Router } from '@reach/router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthenticationContext from './components/AuthenticationContext'
import "./App.css";



// Components
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import EventPage from './pages/EventPage';
import DiscoverPage from './pages/DiscoverPage';
import FooterNavigation from './components/FooterNavigation';
import firebase from './components/firebase';

//Util functions
import firebaseUtils from './utils/firebaseUtils';


//Quick and dirty function test
firebaseUtils.getSingleUser('106258930564522942122')

//dummy data for testing (must pass down to props where we would
//be getting data from our database... ugly prop drilling here)
// import { artistList, eventList, userList } from './dummyData';

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
      let user = firebase.auth().currentUser.providerData[0];
      this.setState({
        isAuthenticated: true,
        userInfo: user
      })

      // CREATE USER IN FIRESTORE HERE IF NOT ALREADY CREATED
      this.createUser(user)
    }




    this.createUser = (user) => {
      console.log('-------------------------------------------------------------------------------------------')
      const userRef = firebase.firestore().collection('users').doc(user.uid)
      let name = user.displayName.split(' ');

      const userObj = {
        firstName: name[0],
        lastName: name[1],
        socialLinks : {
          facebook: null,
          google: null,
          twitter: null,
          tumblr: null,
          instagram: null,
          soundcloud: null
        },
        email: user.email,
        photoURL: user.photoURL,
        isArtist: false,
        isOrganizer: false
      }

      userRef.get()
        .then(function(docSnapshot) {
          console.log('-------------------------------------------------------------------------------------------')

         if(docSnapshot.exists) {
          // do nothing
         } else {
          userRef.set({...userObj})
         }
        })
    }





    this.deAuthenticateUser = () => {
      firebase.auth().signOut()
      this.setState({
        isAuthenticated: false,
        userInfo: null
      })
    }

    this.state = {
      isAuthenticated: false,
      authenticateUser: this.authenticateUser,
      deAuthenticateUser: this.deAuthenticateUser,
      userInfo: null,
      firebase: firebase,
      test: null
    }

    this.theme = createMuiTheme();
  }


  render() {
    return (
      <AuthenticationContext.Provider value={this.state}>
        <MuiThemeProvider theme={this.theme}>
          <CssBaseline />
          <Router>
            {this.state.isAuthenticated ?
              <EventPage path='/' user={user} />
              :
              <LandingPage path='/' firebase={firebase} />
            }
            <ProfilePage path='user' user={user}/>
            <DiscoverPage path='/discover' user={user} />

          </Router>
          <FooterNavigation />
        </MuiThemeProvider>
      </AuthenticationContext.Provider>
    )
  }
}

export default App;
