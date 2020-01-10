
import firebase from '../components/firebase';

import users from '../utils/users';
import events from '../utils/events';

import dummyUsers from '../dummyData';





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
//     let complete = await events.goLive('XLhTCLyg9mNB6maPMt3v');
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

