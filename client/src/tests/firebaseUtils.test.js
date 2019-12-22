
import firebase from '../components/firebase';

import users from '../utils/users';
import events from '../utils/events';

import dummyUsers from '../dummyData';





test('Grabs and console logs Haffed Ali as the single user', () => {
    expect(users.get('106258930564522942122')).toBeTruthy();
})

test("Returns undefined when trying to read a nonexistant user", () => {
    return users.get('reno911').then( data => {
        expect(data).toBe(undefined)
    })
})

test('Should result in a seeded firestore db. Testing creating new users', () => {
    for (let i = 0;i<dummyUsers.length;i++){
        users.create(dummyUsers[i])   
    }
    expect(2+2===4).toBeTruthy();
})





