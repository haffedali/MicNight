import firebase from '../components/firebase';


// Note for me and any other dev working on this.
// I am thinking I should break this file up into users, artists, and organizers
// As I'm building there are so many different functions that are specific to a single type
// of user; so I've began to add comments over a function signifying
// if it is a user specific function
// If there are enough user specific functions, I'll break this up into three seperate files


const users = {

  getAll: () => {
    firebase.firestore().collection('users').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          return doc.data();
        });
      });
  },


  get: (uid) => {
     const payload =  firebase.firestore().collection('users').doc(uid).get()
      .then((doc) => {
        return doc.data();
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      })

      return payload;
  },

  create: (userObj) => {
    const userRef = firebase.firestore().collection('users').doc();

    userRef.set({
      firstName: userObj.firstName,
      lastName: userObj.lastName,
      displayName: userObj.displayName || '',
      tagLine: userObj.tagLine || '',
      socialLinks: {
        facebook: null,
        google: null,
        twitter: null,
        tumblr: null,
        instagram: null,
        soundcloud: null,
      },
      email: userObj.email,
      photoURL: userObj.photoURL,
      isArtist: false,
      isOrganizer: false,
    })
      .catch((err) => console.error(err));

    userRef.collection('relationships').doc('favorites').set({
      artists: [],
      events: [],
      micMates: [],
    });
  },

  updateUserInfo: async (userUid, updateObj) => {
    const  { displayName, photoURL, tagLine } = updateObj
    await firebase.firestore().collection('users').doc(userUid).update({
      displayName,
      photoURL,
      tagLine
    })
  },



  delete: (uid) => {
    firebase.firestore().collection('users').doc(uid).delete()
      .then(() => {
        console.error('Document successfully removed!');
      });
  },


  followUser: (uid, followUserRef) => {
    const userRef = firebase.firestore().collection('users').doc(uid);

    userRef.collection('relationships').doc('favorites').update({
      micMates: firebase.firestore.FieldValue.arrayUnion(followUserRef),
    });
  },

  followEvent: (uid, followEventRef) => {
    const userRef = firebase.firestore().collection('users').doc(uid);

    userRef.collection('relationships').doc('favorites').update({
      events: firebase.firestore.FieldValue.arrayUnion(followEventRef),
    });
  },


  followArtist: (uid, followArtistRef) => {
    const userRef = firebase.firestore().collection('users').doc(uid);

    userRef.collection('relationships').doc('favorites').update({
      artists: firebase.firestore.FieldValue.arrayUnion(followArtistRef),
    });
  },


  joinEvent: async (userRef, eventUid) => {
    await firebase.firestore().collection('events').doc(eventUid)
      .collection('liveData')
      .doc('live')
      .update({
        guests: firebase.firestore.FieldValue.arrayUnion(userRef),
      });
  },

  leaveEvent: async (userUid, eventUid) => {
    await firebase.firestore().collection('events').doc(eventUid)
      .collection('liveData')
      .doc('live')
      .update({
        guests: firebase.firestore.FieldValue.arrayRemove(userUid)
      })
  },


  // ARTIST SPECIFIC
  requestToJoinEventAsArtist: async (artistUid, eventUid) => {

    // ALEC HELP PLOX!!! Why does this only work when i return the function?
    return firebase.firestore().collection('events').doc(eventUid)
      .collection('liveData')
      .doc('requests')
      .update({
        toJoinAsArtist: firebase.firestore.FieldValue.arrayUnion(artistUid),
      })
      .catch((err) => {
        console.error(err);
      });
  },

  // ORGANIZER SPECIFIC
  proccessRequestToJoinEvent: async (artistUid, eventUid) => {
    await firebase.firestore().collection('events').doc(eventUid)
      .collection('liveData')
      .doc('requests')
      .update({
        toJoinAsArtist: firebase.firestore.FieldValue.arrayRemove(artistUid),
      });

    await firebase.firestore().collection('events').doc(eventUid)
      .collection('liveData')
      .doc('live')
      .update({
        artists: firebase.firestore.FieldValue.arrayUnion(artistUid),
      });

    // Here we are grabbing the uid of the event's organizer
    // We'll need it to populate the organizer's request field with the user
    // that wants to join
  },




  ///// only implicit return here... scared me for a sec.
  getOrganizerOfEvent: async (eventUid) => firebase.firestore().collection('events').doc(eventUid).get()
    .then((doc) => doc.data().organizer),

  getFavorites: async(userUid) => {
    return firebase.firestore().collection('users').doc(userUid).collection('relationships').doc("favorites").get()
    .then( (doc) => {
      return doc.data()
    })
    .catch((err)=>console.log(err))

    
  }
};


export default users;
