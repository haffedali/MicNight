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
import users from './utils/users';

// Dummy data
import { dummyUsers } from './dummyData';


//dummy data for testing (must pass down to props where we would
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
      let name = user.displayName.split(' ');
      user.firstName = name[0];
      user.lastname = name[1];


      this.setState({
        isAuthenticated: true,
        userInfo: user
      });

      // CREATE USER IN FIRESTORE HERE IF NOT ALREADY CREATED
      this.createUser(user);
    }




    this.createUser = (user) => {
      const userRef = firebase.firestore().collection('users').doc(user.uid)
      let name = user.displayName.split(' ');

      const userObj = {
        firstName: name[0],
        lastName: name[1],
        socialLinks: {
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
        .then(function (docSnapshot) {
          if (docSnapshot.exists) {
            // do nothing
          } else {
            userRef.set({ ...userObj })
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



  //Literally here just for seeding the db
  componentDidMount() {

//    SEEDING DB
    // setTimeout(() => {
    //   for (let i = 0; i < dummyUsers.length; i++) {
    //     users.create(dummyUsers[i])
    //   }
    // }, 5000)

    //FOLLOW USER
    //User ref should show up in haffed ali's relationships/micMates
    setTimeout(()=> {
      let followArtistRef = firebase.firestore().collection('users').doc('3221dBKExAN8dbaponez');

      users.followUser('106258930564522942122', followArtistRef)
    },5000)
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
            <ProfilePage path='user' user={user} />
            <DiscoverPage path='/discover' user={user} />

          </Router>
          <FooterNavigation />
        </MuiThemeProvider>
      </AuthenticationContext.Provider>
    )
  }
}

export default App;
