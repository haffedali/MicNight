import firebase from 'firebase';


const createUser = (uid,userObj) => {
    firebase.firestore().collection('users').doc(uid).set({
        firstName: userObj.name[0],
        lastName: userObj.name[1],
        socialLinks : {
          facebook: null,
          google: null,
          twitter: null,
          tumblr: null,
          instagram: null,
          soundcloud: null
        },
        email: userObj.email,
        photoURL: userObj.photoURL,
        isArtist: false,
        isOrganizer: false
    })
}

export default createUser;