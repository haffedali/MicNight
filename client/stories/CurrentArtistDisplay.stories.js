import React from 'react';
import { storiesOf } from '@storybook/react';

import CurrentArtistDisplay from '../src/composite-components/CurrentArtistDisplay';


import { artistList, eventList, userList } from './ProfileAvatar.stories';

storiesOf('Profile card with social links', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('Default', ()=> <CurrentArtistDisplay user={artistList[0]} />)