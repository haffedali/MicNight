// Dependencies
import React, { Component } from 'react';
import { Router } from '@reach/router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

// Components
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import EventPage from './pages/EventPage';
import DiscoverPage from './pages/DiscoverPage';
import FooterNavigation from './components/FooterNavigation';
import firebase from './components/firebase';

// Util functions
import users from './utils/users';

// CONTEXT
import AuthenticationContext from './components/AuthenticationContext';
import EventContext from './components/EventContext';

// Dummy data
// import { dummyUsers } from './dummyData';

// dummy data for testing (must pass down to props where we would
// Simulate a logged in user w/ relevant data
// const user = {
//   name: "Haffed Ali",
//   tagLine: "Maker Mover Producer",
//   photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Haffed.svg',
//   uid: '1234'
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.authenticateUser = async () => {
      const userData = firebase.auth().currentUser.providerData[0];
      const user = await users.get(userData.uid);

      this.setState({
        isAuthenticated: true,
        userInfo: { ...user, ...userData, uid: userData.uid },
        eventUid: user.attending,
      });

      // CREATE USER IN FIRESTORE HERE IF NOT ALREADY CREATED
      this.createUser();
    };

    this.createUser = ({ userInfo }) => {
      const user = userInfo;
      const userRef = firebase.firestore().collection('users').doc(user.uid);
      const name = user.displayName.split(' ');

      const userObj = {
        firstName: name[0],
        lastName: name[1],
        socialLinks: {
          facebook: 'test',
          twitter: 'test',
          instagram: 'test',
          soundcloud: 'test',
        },
        email: user.email,
        photoURL: user.photoURL,
        isArtist: false,
        isOrganizer: false,
      };

      userRef.get()
        .then((docSnapshot) => {
          if (docSnapshot.exists) {

            // do nothing
          } else {
            console.log('User has been created!');
            userRef.set({ ...userObj });
          }
        });
    };

    this.deAuthenticateUser = () => {
      firebase.auth().signOut();
      this.setState({
        isAuthenticated: false,
        userInfo: null,
      });
    };

    // DEV MODE -
    //
    // isAuthenticated: true  || isAuthenicated: false
    // userInfo: user || userInfo: null
    //
    //
    this.state = {
      isAuthenticated: false,
      eventUid: '',
    };

    this.theme = createMuiTheme();
  }

  // Literally here just for seeding the db
  componentDidMount() {

    // const getUser = async () => {
    //   user = await users.get("1234")
    //   console.log(user)
    //   this.setState({
    //     userInfo: user
    //   })
    // }

    // getUser();

    // SEEDING DB
    // setTimeout(() => {
    //   for (let i = 0; i < dummyUsers.length; i++) {
    //     users.create(dummyUsers[i])
    //   }
    // }, 5000)
  }

  render() {
    const {
      isAuthenticated, user, userInfo, eventUid,
    } = this.state;
    return (
      <AuthenticationContext.Provider value={this.state}>
        <EventContext.Provider value={eventUid}>
          <MuiThemeProvider theme={this.theme}>
            <CssBaseline />
            <Router>
              {

              isAuthenticated
                ? <EventPage path="/" user={userInfo} />
                : <LandingPage path="/" firebase={firebase} />
}
              <ProfilePage path="/user" user={user} />
              <DiscoverPage path="/discover" user={user} />

            </Router>
            <FooterNavigation />
          </MuiThemeProvider>
        </EventContext.Provider>
      </AuthenticationContext.Provider>
    );
  }
}

export default App;
