import firebase from 'firebase';

const getSingleUser = (uid) => {
    return firebase.firestore().collection('users').doc(uid).get()
        .then( (doc) => {
            console.log(doc.data())
            return doc.data();
        })
}

export default getSingleUser;