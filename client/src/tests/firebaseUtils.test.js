
import firebase from '../components/firebase';

import users from '../utils/users';
import events from '../utils/events';




test('Grabs and console logs Haffed Ali as the single user', () => {
    expect(users.get('106258930564522942122')).toBeTruthy();
})

test("Returns undefined when trying to read a nonexistant user", () => {
    return users.get('reno911').then( data => {
        expect(data).toBe(undefined)
    })
})

// test("Should update a user with the id of 10, in this case changing user's name to Paul", () => {
    
// })





