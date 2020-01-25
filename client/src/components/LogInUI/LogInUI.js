import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import AuthenticationContext from '../AuthenticationContext';

class LogInUI extends Component {
  constructor({ firebase }) {
    super(firebase);
    console.log(firebase)
    this.uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
      },
    };
  }


  componentDidMount() {
    this.firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <AuthenticationContext.Consumer>
        {({
          isAuthenticated, userInfo, authenticateUser, deAuthenticateUser,
        }) => (
          <div className="login-container">
            {/* Super questionable attachment of my authentication method here, gets a red warning */}
            {this.uiConfig.callbacks.signInSuccessWithAuthResult = authenticateUser}

            <div>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={this.firebase.auth()}
              />
            </div>
          </div>
        )}
      </AuthenticationContext.Consumer>

    );
  }
}

export default LogInUI;
