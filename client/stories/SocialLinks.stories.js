import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialLinks from '../src/components/SocialLinks';


storiesOf('Social Media Links', module)
.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
.add('Standalone view', () => <SocialLinks />)