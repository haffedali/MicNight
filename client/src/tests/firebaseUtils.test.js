import firebaseUtils from '../utils/firebaseUtils';

test('Grabs and console logs Haffed Ali as the single user', () => {
    expect(firebaseUtils.getSingleUser('106258930564522942122')).toBeTruthy();
})