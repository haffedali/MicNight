import React from 'react';
import { storiesOf } from '@storybook/react';

import ProfileDataTable from '../src/composite-components/ProfileDataTable';
import EventDataTable from '../src/composite-components/EventDataTable';

import { artistList, eventList, userList } from '../src/dummyData.js';



// We are feeding dummy data into the 'entries' prop to simulate loaded on open
storiesOf('Data Table with Controller', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('ProfileDataTable', ()=> <ProfileDataTable entries={artistList} />)
    .add('EventDataTable', ()=> <EventDataTable entries={artistList}/>)
