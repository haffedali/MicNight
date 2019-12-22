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

        userRef.collection('relationships').doc('favorites').set({
            artists: [],
            events: [],
            micMates: []
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
        let userRef = firebase.firestore().collection('users').doc(uid)

        userRef.collection('relationships').doc('favorites').update({
            micMates: firebase.firestore.FieldValue.arrayUnion(followUserRef)
        })
    },

    followEvent: (uid,followEventRef) => {
        let userRef = firebase.firestore().collection('users').doc(uid)
        
        userRef.collection('relationships').doc('favorites').update({
            events: firebase.firestore.FieldValie.arrayUnion(followEventRef)
        })
    },


    followArtist: (uid,followArtistRef) => {
        let userRef = firebase.firestore().collection('users').doc(uid);
        
        userRef.collection('relationships').doc('favorites').update({
            artists: firebase.firestore.FieldValue.arrayUnion(followArtistRef)
        });
    },



    
    joinEvent: (userRef, eventUid) => {
        firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('live')
        .update("guests", firebase.firestore().FieldValue.arrayUnion(userRef))
    }
}



export default users;