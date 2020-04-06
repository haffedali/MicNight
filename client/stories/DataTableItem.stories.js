import React from 'react';
import { storiesOf } from '@storybook/react';
import DataTableItem from '../src/components/DataTableItem';


// entry data
import { artistList, eventList, userList } from './ProfileAvatar.stories';


storiesOf('Profile Table Items', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('Artist data table item', () => <DataTableItem entry={artistList[0]}/>)
    .add('Event data table item', () => <DataTableItem entry={eventList[0]} />)
    .add('User data table item', () => <DataTableItem entry={userList[0]}/>)