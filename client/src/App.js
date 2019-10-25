import React, { Component } from 'react';

// import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Button from '@material-ui/core/Button'
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isSignedIn: false }
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      this.props.fireBase.auth.EmailAuthProvider.PROVIDER_ID,
      this.props.fireBase.auth.GoogleAuthProvider.PROVIDER_ID,
      this.props.fireBase.auth.FacebookAuthProvider.PROVIDER_ID,
      this.props.fireBase.auth.TwitterAuthProvider.PROVIDER_ID
    ]
  };




  componentDidMount() {
    this.props.fireBase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <div>
            <div>Signed In!</div>
            <Button variant="contained" color="primary" onClick={() => this.props.fireBase.auth().signOut()}>Sign Out!</Button>
            <h1>Welcome {this.props.fireBase.auth().currentUser.displayName}</h1>
          </div>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={this.props.fireBase.auth()}
            />
          )}
      </div>
    )
  }
}

export default App;
