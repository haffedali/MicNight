
import firebase from '../components/firebase';

import users from '../utils/users';
import events from '../utils/events';

import dummyUsers from '../dummyData';





test('Grabs and console logs Haffed Ali as the single user', () => {
    expect(users.get('106258930564522942122')).toBeTruthy();
})

test("Returns undefined when trying to read a nonexistant user", async () => {
    const data = await users.get('reno911');
    expect(data).toBe(undefined);
})

test(`returns 3 arrays: micMates, artists, and events`, async () => {
    const data = await users.getFavorites()
});





