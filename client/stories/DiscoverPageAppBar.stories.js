import React from 'react';
import { storiesOf } from '@storybook/react';

import DiscoverPageAppBar from '../src/components/DiscoverPageAppBar';

storiesOf("Discover Page App Bar", module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
.add('AppBar', () => <DiscoverPageAppBar></DiscoverPageAppBar>)