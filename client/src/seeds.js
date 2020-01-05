import dummyUsers from './dummyData'
import firebase from './components/firebase';
import users from './utils/users';

function seedUsers(userPayload){
    for (let i=0;i<userPayload.length;i++){
        users.create(userPayload[i])
    }
}


seedUsers(dummyUsers);