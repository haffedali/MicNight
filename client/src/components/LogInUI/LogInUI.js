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

                <div>
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={this.props.firebase.auth()}
                  />
                </div>
          </div>
        )}
      </AuthenticationContext.Consumer>

    )
  }
}

export default LogInUI;