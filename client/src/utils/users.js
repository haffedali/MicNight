import firebase from 'firebase';


const users = {

    getAll: () => {
        firebase.firestore().collection('users').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.data())
                })
            })
    },

    get: (uid) => {
        return firebase.firestore().collection('users').doc(uid).get()
            .then((doc) => {
                return doc.data();
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    },

    create: (userObj) => {
        console.log(userObj)
        const userRef = firebase.firestore().collection('users').doc();

        userRef.set({
            firstName: userObj.firstName,
            lastName: userObj.lastName,
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
        .catch(err=>console.log(err))
    },

    update: (uid, updateObj) => {
        firebase.firestore().collection('users').doc(uid).update({
            updateObj
        })
    },

    delete: (uid) => {
        firebase.firestore().collection('users').doc(uid).delete().then(()=>{
            console.log('Document successfully removed!')
        })
    },

    followUser: (uid,followUserRef) => {
        firebase.firestore().collection('users').doc(uid)
        .collection('relationships').doc('micMates').arrayUnion(followUserRef);
    },

    followEvent: (uid,followEventRef) => {
        firebase.firestore().collection('users').doc(uid)
        .collection('relationships').doc('events').arrayUnion(followEventRef);
    },

    followEvent: (uid,followArtistRef) => {
        firebase.firestore().collection('users').doc(uid)
        .collection('relationships').doc('artists').arrayUnion(followArtistRef);
    },
    
    joinEvent: (userRef, eventUid) => {
        firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('live')
        .update("guests", firebase.firestore().FieldValue.arrayUnion(userRef))
    }
}



export default users;