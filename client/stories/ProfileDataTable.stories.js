import React from 'react';
import { storiesOf } from '@storybook/react';

import ProfileDataTable from '../src/composite-components/ProfileDataTable';

import { artistList, eventList, userList } from './ProfileAvatar.stories';

storiesOf('Data Table with Controller', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('Default', ()=> <ProfileDataTable entries={artistList} />)