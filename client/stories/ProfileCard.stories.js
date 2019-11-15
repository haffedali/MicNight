import React from 'react';
import { storiesOf } from '@storybook/react';

import ProfileCard from '../src/composite-components/ProfileCard'

// entry data
import { artistList, eventList, userList } from './ProfileAvatar.stories';

storiesOf('Profile Card with details', module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
.add('default view', () => <ProfileCard user={artistList[0]}/>)