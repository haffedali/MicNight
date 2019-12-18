import firebase from 'firebase';

const getSingleUser = (uid) => {
    firebase.firestore().collection('users').doc(uid).get()
        .then( (doc) => {
            console.log(doc.data())
        })
}

export default getSingleUser;