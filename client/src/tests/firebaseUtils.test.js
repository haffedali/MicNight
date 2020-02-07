
import firebase from '../components/firebase';

import users from '../utils/users';
import events from '../utils/events';
import organizer from '../utils/organizer'

import dummyUsers from '../dummyData';



// test uids
const testGuidUid = 'ImjustHereTolistenNVibe';
const testArtistUid = '4g6MNKxifacKB6quFjXo';
const testArtistUid2 = 'xXDragnoSlayyerXx'
const testEventUid = 'XLhTCLyg9mNB6maPMt3v';
const testOrganizerUid = '106258930564522942122';




// test('Grabs and console logs Haffed Ali as the single user', () => {
//     expect(users.get('106258930564522942122')).toBeTruthy();
// })

// test("Returns undefined when trying to read a nonexistant user", async () => {
//     const data = await users.get('reno911');
//     expect(data).toBe(undefined);
// })

// test(`returns 3 arrays: micMates, artists, and events`, async () => {
//     const eventData = await events.get('XLhTCLyg9mNB6maPMt3v')
//     console.log(eventData)
//     expect(eventData).toBeTruthy();
// });

// test('Changes the name of the event to an arbitrary string', async () => {
//     let complete = await events.update('XLhTCLyg9mNB6maPMt3v', {name: 'Ali House'})
//     const updatedEventData = await events.get('XLhTCLyg9mNB6maPMt3v')
//     expect(updatedEventData.name === 'Ali House').toBeTruthy();
// })

// test('Adds live collection to event document', async () => {
//     let complete = await events.goLiveTEST('XLhTCLyg9mNB6maPMt3v');
//     const liveEventData = await events.getLiveData('XLhTCLyg9mNB6maPMt3v')
//     expect(liveEventData).toBeTruthy();
// })

// test('Adds artist to live collection', async () => {
//     let uid = '2321321'
//     let eventUpdate = await events.addArtist('XLhTCLyg9mNB6maPMt3v',uid)
// })

// test('Adds guest to live collection', async () => {
//     let uid = '32423423'
//     let eventUpdate = await events.addGuest('XLhTCLyg9mNB6maPMt3v',uid)
// })

// test('Sends join request from an artist to the oranizer of an event', async () => {


//     const complete = await users.requestToJoinEventAsArtist(testArtistUid, testEventUid)

//     // const organizerRequestList = await users.get(testOrganzierUid).requests

//     expect(true).toBeTruthy();
// })

// test('Returns the organizerUid of the head organizer of event', async () => {
   

//     const organizerUid = await users.getOrganizerOfEvent(testEventUid)
//     console.log(organizerUid)
//     expect(organizerUid === testOrganizerUid).toBeTruthy();
// })

// test(`Returns list of artist request uid's from a specific event`, async() => {


//     const requestList = await events.getRequests(testEventUid)

//     expect(requestList.toJoinAsArtist).toBeTruthy();
// })

// test('Organizer can admit artist to event', async() => {
//     await users.proccessRequestToJoinEvent(testArtistUid, testEventUid);

//     expect(true).toBeTruthy();
// })

// test('Removes an artist from a specific event', async () => {
//     await users.removeArtistFromEvent(testArtistUid, testEventUid);

    
// })

// test('Switches current artist', async () => {
//     await organizer.nextActiveArtist(testEventUid)
// })

// test('Closes live event', async () => {
//     await organizer.closeEvent(testEventUid)
// })

