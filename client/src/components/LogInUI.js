import React, {Component} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Button from '@material-ui/core/Button'

class LogInUI extends Component {
    constructor(props){
        super(props)
        this.state = {isSignedIn: false}
    }

      // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      this.props.firebase.auth.EmailAuthProvider.PROVIDER_ID,
      this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      this.props.firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ]
  };

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  render(){
      return(
          <div className="login-container">
              {this.state.isSignedIn ? (
                <div>
                  <div>Signed In!</div>
                  <Button variant="contained" color="primary" onClick={() => this.props.firebase.auth().signOut()}>Sign Out!</Button>
                  <h1>Welcome {this.props.firebase.auth().currentUser.displayName}</h1>
                </div>
              ) : (
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={this.props.firebase.auth()}
                />
              )}
          </div>
      )
  }
}

export default LogInUI;