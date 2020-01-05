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
        firebase.firestore().collection('events').doc(uid).get()
        .then( (doc) => {
            return doc.data();
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    },

    update: (uid, updateObj) => {
        firebase.firestore().collection('events').doc(uid)
        .update({
            updateObj
        })
    },

    delete: (uid) => {
        firebase.firestore().collection('users').doc(uid).delete().then(()=>{
            console.log('Document successfully removed!')
        })
    },

    goLive: (uid) => {
        firebase.firestore().collection('events').doc(uid)
        .collection('live').add({
            artists: [],
            chat: [],
            guests: []
        })
    }
}

export default events