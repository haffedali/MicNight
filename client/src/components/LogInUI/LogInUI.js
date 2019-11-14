import React, { Component } from 'react';
import AuthenticationContext from '../AuthenticationContext';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Button from '@material-ui/core/Button'

class LogInUI extends Component {
  constructor(props) {
    super(props)
    this.state = { isSignedIn: false }
  }

  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/signedIn',

    signInOptions: [
      this.props.firebase.auth.EmailAuthProvider.PROVIDER_ID,
      this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
    }
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  componentDidUpdate(){

  }

  render() {
    return (
      <AuthenticationContext.Consumer>
        {({ isAuthenticated, userInfo, authenticateUser, deAuthenticateUser }) => (
          <div className="login-container">
            {/* Super questionable attachment of my authentication method here, gets a red warning */}
            {this.uiConfig.callbacks.signInSuccessWithAuthResult = authenticateUser}
            {isAuthenticated ? (
              <div>
                <div>Signed In as {userInfo.displayName}!</div>
                <Button variant="contained" color="primary" onClick={() => deAuthenticateUser()}>Sign Out!</Button>
              </div>
            ) : (
                <div>
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={this.props.firebase.auth()}
                  />
                </div>
              )}
          </div>
        )}
      </AuthenticationContext.Consumer>

    )
  }
}

export default LogInUI;