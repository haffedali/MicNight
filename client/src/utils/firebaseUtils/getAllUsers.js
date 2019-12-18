import firebase from 'firebase';

const getAllUsers = () => {
    firebase.firestore().collection('users').get()
        .then( (snapshot) => {
            snapshot.forEach( (doc) => {
                console.log(doc.data())
            })
        })
}

export default getAllUsers;