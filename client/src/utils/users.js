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

    create: (uid, userObj) => {
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

    followEvent: (uid,followUserRef) => {
        firebase.firestore().collection('users').doc(uid)
        .collection('relationships').doc('micMates').arrayUnion(followUserRef);
    },

    
    joinEvent: (userRef, eventUid) => {
        firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('live')
        .update("guests",FieldArray.arrayUnion(userRef))
    }

    
}

export default users;