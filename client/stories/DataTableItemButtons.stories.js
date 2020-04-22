import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '@material-ui/core/List';
import OrderChangeButtons from '../src/components/OrderChangeButtons';
import AcceptDeclineButtons from '../src/components/AcceptDeclineButtons';
import DataTableItem from '../src/components/DataTableItem';
import DataTableItemChoiceContainer from '../src/composite-components/DataTableItemChoiceContainer'
import DataTableView from '../src/components/DataTableView';
import OrganizerDataTableView from '../src/composite-components/OrganzierDataTableView';




// entry data
import { artistList, eventList, userList } from '../src/dummyData';


let orderItemList;
let acceptItemList;




const clickEffectOne = () => {
    console.log('Click 1')
}

const clickEffectTwo = () => {
    console.log('Click 2')
}


const generateItemLists = () => {
    orderItemList = artistList.map((entry) => {
        return (
            <DataTableItemChoiceContainer
                dataTableItem={<DataTableItem entry={entry} />}
                choiceButtons={<OrderChangeButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />}
            />
        )
    })

    acceptItemList = artistList.map((entry) => {
        return (
            <DataTableItemChoiceContainer
                dataTableItem={<DataTableItem entry={entry} />}
                choiceButtons={<AcceptDeclineButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />}
            />
        )
    })
}


generateItemLists();

storiesOf('DataTableItemButtons', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('OrderChangeButtons alone', () => <OrderChangeButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />)
    .add('Order buttons with DataTableItem', () => <DataTableItemChoiceContainer
        dataTableItem={<DataTableItem entry={artistList[0]} />}
        choiceButtons={<OrderChangeButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />}
    />)
    .add('Accept/Decline buttons with DataTableItem', () => <DataTableItemChoiceContainer
        dataTableItem={<DataTableItem entry={artistList[0]} />}
        choiceButtons={<AcceptDeclineButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />}
    />)
    .add('Order in list', () => {
        return(<List>
            {orderItemList}
        </List>)
    })
    .add('Accept/decline in list', () => {
        return(<List>
            {acceptItemList}
        </List>)
    })
    .add('OrganizerDataTableView Artist Order' , () => {
        return(
            <OrganizerDataTableView name= 'artistOrder'  artists={orderItemList}/>
        )
    })
    .add('OrganizerDataTableView Artist Requests' , () => {
        return(
            <OrganizerDataTableView name= 'artistRequests'  artists={acceptItemList}/>
        )
    })