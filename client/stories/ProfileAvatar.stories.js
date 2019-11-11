import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileAvatar from '../src/components/ProfileAvatar';

export const artistList = [
    {
        name: "Haffed Ali",
        tagLine: "Maker Mover n Producer",
        photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Haffed.svg',
        uid: '1234'
    },
    {
        name: "Anthony Baker",
        tagLine: "Rapper",
        photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Anthony.svg',
        uid: '1235'
    },
    {
        name: "Martin Gerardo",
        tagLine: "Singer/Songwriter",
        photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Martin.svg',
        uid: '1236'
    },
    {
        name: "Sarah Debagon",
        tagLine: "Painter",
        photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Sarah.svg',
        uid: '1237'
    },
    {
        name: "Freaky Fresh",
        tagLine: "Comic",
        photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Freaky.svg',
        uid: '1238'
    },
    {
        name: "Rebecca Huang",
        tagLine: "Palm Reader",
        photoUrl: 'https://avatars.dicebear.com/v2/avataaars/Rebecca.svg',
        uid: '1239'
    },
]

export const eventList = [{
    name: 'Empresso shouts',
    tagLine: 'Impress @ Empresso',
    photoUrl: 'https://static.wixstatic.com/media/3dd772_5579c26fb6f745ba88fda4540d2cf0ea~mv2.jpg/v1/fit/w_2500,h_1330,al_c/3dd772_5579c26fb6f745ba88fda4540d2cf0ea~mv2.jpg',
    uid: '1235'
}]

export const userList = [{
    name: "Vivian Tran",
    tagLine: 'Boss bitch',
    uid: '1236'
}]

storiesOf('Profile Avatars', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('Entry without image', () => <ProfileAvatar photoUrl={userList[0].photoUrl} />)
    .add('Entry with image', () => <ProfileAvatar photoUrl={artistList[0].photoUrl} />)
    .add('Event with image', () => <ProfileAvatar photoUrl={eventList[0].photoUrl} />)