import React, {useState} from 'react';
import './landing-page.scss';
import FirebaseAuthUI from '../../components/LogInUI'


const LandingPage = (props) => {
  return (
    <div className={"test"}>
          <FirebaseAuthUI firebase={props.firebase}/>
    </div>
  )
};

export default LandingPage;