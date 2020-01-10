import React from 'react';
import { storiesOf } from '@storybook/react';
import ChatItem from '../src/components/ChatItem';

const dummyMessage = {
    photoUrl: '',
    message: 'This is out first test message!',
    uid: 'souniquenumbertherearestringsinhere',
    name: 'Charles',
    TIMESTAMP: '5:45'
};

const dummyMessageLong = {
    photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Freaky.svg',
    message: 'this message is really long. I need to express how much i like this musician!! And i like dogs a lot. also i play pokemon. hit me up people im single. haha jk xP',
    uid: 'anotheruniqueid',
    name: 'Dolan',
    TIMESTAMP: '5:45'
}

storiesOf('Chat messages', module)
    .addDecorator(story => <div style={{ padding: '3rem', width: '600px' }}>{story()}</div>)
    .add('Message from a user', () => <ChatItem entry={dummyMessage} />)
    .add('Long message', () => <ChatItem entry={dummyMessageLong} />)