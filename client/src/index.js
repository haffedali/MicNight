import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(<App firebase={firebase}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
