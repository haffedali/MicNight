import React from 'react';
import { storiesOf } from '@storybook/react';
import firebase from 'firebase'


import LogInUI from '../src/components/LogInUI';


// Setting up and linking firebase
let firebaseConfig = {
    apiKey: "AIzaSyA6RIfEDo0UjDG7KHbCaMPEIGgrRcEdvVA",
    authDomain: "micnight-9b383.firebaseapp.com",
    databaseURL: "https://micnight-9b383.firebaseio.com",
    projectId: "micnight-9b383",
    storageBucket: "micnight-9b383.appspot.com",
    messagingSenderId: "318590627497",
    appId: "1:318590627497:web:0b4d207c91bc0cb8cd83b8",
    measurementId: "G-W7Y1FZG0PH"
  };

  firebase.initializeApp(firebaseConfig)





storiesOf('LogInUI', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default', () => {
        return <LogInUI firebase={firebase}/>
    })