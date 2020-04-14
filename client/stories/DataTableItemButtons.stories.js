import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderChangeButtons from '../src/components/OrderChangeButtons';
import DataTableItem from '../src/components/DataTableItem';
import DataTableItemChoiceContainer from '../src/composite-components/DataTableItemChoiceContainer'



// entry data
import { artistList, eventList, userList } from '../src/dummyData';


const clickEffectOne = () => {
    console.log('Click 1')
}

const clickEffectTwo = () => {
    console.log('Click 2')
}

storiesOf('DataTableItemButtons', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('OrderChangeButtons alone', () => <OrderChangeButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />)
    .add('Buttons with DataTableItem', () => <DataTableItemChoiceContainer
                                                dataTableItem={<DataTableItem entry={artistList[0]} />}
                                                choiceButtons={<OrderChangeButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />}
    />)