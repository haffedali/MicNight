import React from 'react';
import { storiesOf } from '@storybook/react';

import ProfilePage from '../src/pages/ProfilePage';

import { artistList, eventList, userList } from './ProfileAvatar.stories';


// Simulate logged in user
const user = {
    name: "Haffed Ali",
    tagLine: "Maker Mover Producer",
    photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Haffed.svg',
    uid: '1234'
}


storiesOf('Profile Page', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('Default', () => <ProfilePage user={user} entries={artistList} />)