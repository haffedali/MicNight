import firebase from 'firebase';
import tools from "./tools"


const events = {
    getAll: () => {
        const payload = []
        firebase.firestore().collection('events').get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              payload.push(doc.data());
            });
          });
        return payload
      },

    create: (eventObj) => {
        firebase.firestore().collection('events').add({
            city: eventObj.location,
            name: eventObj.name,
            date: eventObj.date,
            photoURL: eventObj.photoURL,
            tagLine: eventObj.tagLine,
            organizer: eventObj.organizer
        })
    },

    get: (uid) => {
        return firebase.firestore().collection('events').doc(uid).get()
            .then((doc) => {
                return doc.data();
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    },

    getLiveData: (eventUid) => {
        return firebase.firestore().collection('events').doc(eventUid).collection('liveData').get()
        .then((doc)=> {
            return doc.data();
        })
        .catch((err)=>console.log(err))
    },

    update: (uid, updateObj) => {
        return firebase.firestore().collection('events').doc(uid)
            .update({
                ...updateObj
            })
            .then((data) => {
                console.log("Successfully updated")
            })
            .catch((err) => {
                console.log(err)
            })
    },

    delete: (uid) => {
        firebase.firestore().collection('events').doc(uid).delete().then(() => {
            console.log('Event successfully removed!')
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

    //////////////////////////////////////////////////////////////////

    goLiveTEST: async (eventUid) => {
        await firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live').set({
                artists: ['artist2@gmail.com', 'artist2@gmail.com'],
                chat: [],
                guests: ['superduperemail@gmail.com','106258930564522942122']
            })

        await firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('requests').set({
                toJoinAsArtist: []
            })
    },

    //////////////////////////////////////////////////////////////////


    getRequests: async (eventUid) => {
        return firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('requests').get()
            .then((doc) => {
                return doc.data().toJoinAsArtist
            })
    },

    getLiveData: (uid) => {
        return firebase.firestore().collection('events').doc(uid)
            .collection('liveData').doc('live').get()
            .then((doc) => {
                return doc.data()
            })
    },

    addArtist: (eventUid, artistUid) => {
        return firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live')
            .update({
                "artists": firebase.firestore.FieldValue.arrayUnion(artistUid)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    addGuest: (eventUid, guestUid) => {
        return firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live')
            .update({
                "guests": firebase.firestore.FieldValue.arrayUnion(guestUid)
            })
            .catch((err) => {
                console.log(err)
            })
    },

    fetchEventsByCity: async (searchTerm) => {
        const payLoad = [];
        await firebase.firestore().collection('events')
            .where("city", "==", searchTerm)
            .get()
            .then((snapshot)=>{
                snapshot.forEach((doc)=>{
                    console.log(doc.data())
                    payLoad.push(doc.data())
                })
            })
            .catch((err) => {
                console.log(err)
            })
        return payLoad
    },

    moveArtistUpOne: async (eventUid, artistUid) => {
        const performanceArray = await firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live')
            .get()
            .then((doc) => {
                return doc.data().artists
            })
        tools.moveArrayElementfUpOne(performanceArray, artistUid)
        return firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live')
            .update({
                "artists": performanceArray
            })
            .catch((err) => {
                console.log(err)
            })
    },
    
    moveArtistDownOne: async (eventUid, artistUid) => {
        const performanceArray = await firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live')
            .get()
            .then((doc) => {
                return doc.data().artists
            })
        tools.moveArrayElementDownOne(performanceArray, artistUid)
        return firebase.firestore().collection('events').doc(eventUid)
            .collection('liveData').doc('live')
            .update({
                "artists": performanceArray
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

export default events