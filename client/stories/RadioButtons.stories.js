import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButtons from '../src/components/RadioButtons';




// const GreenRadio = withStyles({
//     root: {
//       color: green[400],
//       '&$checked': {
//         color: green[600],
//       },
//     },
//     checked: {},
//   })(props => <Radio color="default" {...props} />);

storiesOf('Radio Buttons', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default' , () => <RadioButtons />)