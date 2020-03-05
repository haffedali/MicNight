import React from 'react';
import { storiesOf } from '@storybook/react';
import DataTableItem from '../src/components/DataTableItem';
import DiscoverDataTableItem from '../src/components/DiscoverDataTableItem';


// entry data
import { artistList, eventList, userList } from './ProfileAvatar.stories';
import events from '../src/utils/events';


storiesOf('Profile Table Items', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('Artist data table item', () => <DataTableItem entry={artistList[0]}/>)
    .add('Event data table item', () => <DataTableItem entry={eventList[0]} />)
    .add('User data table item', () => <DataTableItem entry={userList[0]}/>)
    .add('Discover event table item', ()=> <DiscoverDataTableItem entry={eventList[0]} />)