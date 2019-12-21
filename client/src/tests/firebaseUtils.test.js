import firebaseUtils from '../utils/firebaseUtils';
import firebase from '../components/firebase';




test('Grabs and console logs Haffed Ali as the single user', () => {
    expect(firebaseUtils.getSingleUser('106258930564522942122')).toBeTruthy();
})

test('Creates new user')

