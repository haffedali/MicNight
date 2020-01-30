import firebase from '../components/firebase';

const organizer = {
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
    
      },

      removeArtistFromEvent: async (artistUid, eventUid) => {
        await firebase.firestore().collection('events').doc(eventUid)
          .collection('liveData')
          .doc('live')
          .update({
            artists: firebase.firestore.FieldValue.arrayRemove(artistUid),
          });
      },


      nextActiveArtist: async (eventUid) => {
        let nextArtistUid;
        await firebase.firestore().collection('events').doc(eventUid)
          .collection('liveData')
          .doc('live')
          .get().then((doc) => {
            nextArtistUid = doc.data().artists[0]
          })

        organizer.removeArtistFromEvent(nextArtistUid,eventUid)

        await firebase.firestore().collection('events').doc(eventUid)
          .collection('liveData')
          .doc('live')
          .update({
              "performing": nextArtistUid
          })
      },

      closeEvent: async (eventUid) => {
        await firebase.firestore().collection('events').doc(eventUid)
        .collection('liveData')
        .doc('live')
        .delete().then(() => {
            console.log('LiveData deleted; event closed for the day!')
        })
      }
}

export default organizer;