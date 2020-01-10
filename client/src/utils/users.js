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
            socialLinks: {
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
            .catch(err => console.log(err))

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
        firebase.firestore().collection('users').doc(uid).delete().then(() => {
            console.log('Document successfully removed!')
        })
    },




    followUser: (uid, followUserRef) => {
        let userRef = firebase.firestore().collection('users').doc(uid)

        userRef.collection('relationships').doc('favorites').update({
            micMates: firebase.firestore.FieldValue.arrayUnion(followUserRef)
        })
    },

    followEvent: (uid, followEventRef) => {
        let userRef = firebase.firestore().collection('users').doc(uid)

        userRef.collection('relationships').doc('favorites').update({
            events: firebase.firestore.FieldValue.arrayUnion(followEventRef)
        })
    },


    followArtist: (uid, followArtistRef) => {
        let userRef = firebase.firestore().collection('users').doc(uid);

        userRef.collection('relationships').doc('favorites').update({
            artists: firebase.firestore.FieldValue.arrayUnion(followArtistRef)
        });
    },




    joinEvent: (userRef, eventUid) => {
        firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live')
            .update("guests", firebase.firestore().FieldValue.arrayUnion(userRef))
    },

    requestToJoinEventAsArtist: async (artistUid, eventUid) => {
        let organizerUid;

        // Here we are grabbing the uid of the event's organizer
        // We'll need it to populate the organizer's request field with the user
        // that wants to join
        await firebase.firestore().collection('events').doc(eventUid).get()
            .then((doc) => {
                organizerUid = doc.data().organizer
            }).catch((err) => {
                console.log('error getting document:', error)
            })


        // ALEC HELP PLOX!!! Why does this only work when i return the function? 
        return firebase.firestore().collection('users').doc(organizerUid)
        .collection('requests').doc('requests')
        .update({
            "toJoinAsArtist": firebase.firestore.FieldValue.arrayUnion(artistUid)
        })
        .catch((err)=> {
            console.log(err)
        })
    }
}



export default users;