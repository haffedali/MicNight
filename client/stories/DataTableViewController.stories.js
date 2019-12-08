import React from 'react';
import { storiesOf } from '@storybook/react';

import DataTableViewController from '../src/components/DataTableViewController';


storiesOf('Data Table controller', module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
.add('table controls', () => <DataTableViewController buttons={['Events','Artists', 'MicMates']} />)
