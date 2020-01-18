import firebase from 'firebase';


const events = {
    create: (eventObj) => {
        firebase.firestore().collection('events').add({
            geodcode: eventObj.geocode,
            location: eventObj.location,
            name: eventObj.name,
            recurring : eventObj.recurring,
            time: eventObj.time
        })
    },

    get: (uid) => {
        return firebase.firestore().collection('events').doc(uid).get()
        .then( (doc) => {
            return doc.data();
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    },

    update: (uid, updateObj) => {
        return firebase.firestore().collection('events').doc(uid)
        .update({
            ...updateObj
        })
        .then( (data) => {
            console.log("Successfully updated")
        })
        .catch( (err) => {
            console.log(err)
        })
    },

    delete: (uid) => {
        firebase.firestore().collection('users').doc(uid).delete().then(()=>{
            console.log('Document successfully removed!')
        })
    },

    goLive: (eventUid) => {
        firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('live').set({
            artists: [],
            chat: [],
            guests: []
        })
        
        firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('requests').set({
            toJoinAsArtist: []
        })
    },

    getRequests: async (eventUid) => {
        return firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('requests').get()
        .then( (doc) => {
            return doc.data()
        })
    },

    getLiveData: (uid) => {
        return firebase.firestore().collection('events').doc(uid)
        .collection('liveData').doc('live').get()
        .then( (doc) => {
            return doc.data()
        })
    },

    addArtist: (eventUid, artistUid) => {
        return firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('live')
        .update({
            "artists": firebase.firestore.FieldValue.arrayUnion(artistUid)
        })
        .catch( (err) => {
            console.log(err)
        })
    },

    addGuest: (eventUid, guestUid) => {
        return firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData').doc('live')
        .update({
            "guests": firebase.firestore.FieldValue.arrayUnion(guestUid)
        })
        .catch( (err) => {
            console.log(err)
        })
    },
}

export default events