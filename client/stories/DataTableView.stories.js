import React from 'react';
import { storiesOf } from '@storybook/react';

// entry data
import { artistList, eventList, userList } from './ProfileAvatar.stories';


import DataTableView from '../src/components/DataTableView';


storiesOf('User saved entries', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('View saved artists', () =>  <DataTableView entries={artistList} /> )