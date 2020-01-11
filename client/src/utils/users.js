import firebase from 'firebase';


// Note for me and any other dev working on this.
// I am thinking I should break this file up into users, artists, and organizers
// As I'm building there are so many different functions that are specific to a single type
// of user; so I've began to add comments over a function signifying if it is a user specific function
// If there are enough user specific functions, I'll break this up into three seperate files





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
            .collection('liveData').doc('live').update({
                "guests": firebase.firestore().FieldValue.arrayUnion(userRef)
            })
    },


    // ARTIST SPECIFIC
    requestToJoinEventAsArtist: async (artistUid, eventUid) => {
        let organizerUid;

        // ALEC HELP PLOX!!! Why does this only work when i return the function? 
        return firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('requests').update({
                "toJoinAsArtist": firebase.firestore.FieldValue.arrayUnion(artistUid)
            })
            .catch((err) => {
                console.log(err)
            })

    },

    // ORGANIZER SPECIFIC
    proccessRequestToJoinEvent: async (artistUid, eventUid) => {
        await firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('requests').update({
            "toJoinAsArtist": firebase.firestore.FieldValue.arrayRemove(artistUid)
        })

       await firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('live').update({
            "artists": firebase.firestore.FieldValue.arrayUnion(artistUid)
        })
        
        // Here we are grabbing the uid of the event's organizer
        // We'll need it to populate the organizer's request field with the user
        // that wants to join

        
    },

    getOrganizerOfEvent: async (eventUid) => {
        return firebase.firestore().collection('events').doc(eventUid).get()
            .then((doc) => {
                return doc.data().organizer
            })
    },

    removeArtistFromEvent: async (artistUid,eventUid) => {
        await firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live').update({
                "artists": firebase.firestore.FieldValue.arrayRemove(artistUid)
            })
    }

}



export default users;