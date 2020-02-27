import firebase from '../components/firebase';

export default {
    users: firebase.firestore().collection('users'),
    events: firebase.firestore().collection('events'),
}