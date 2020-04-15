import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

const OrganizerDataTableView = ({ artistOrder, artistRequests }) => {
    // const [artistOrder, setArtistOrder] = useState([]);
    // const [artistRequests, setArtistRequests] = useState([])

    // setArtistOrder = artistOrder.map((entry) => {
    //     return (
    //         <DataTableItemChoiceContainer
    //             dataTableItem={<DataTableItem entry={entry} />}
    //             choiceButtons={<OrderChangeButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />}
    //         />
    //     )
    // })

    // setArtistRequests = artistRequests.map((entry) => {
    //     return (
    //         <DataTableItemChoiceContainer
    //             dataTableItem={<DataTableItem entry={entry} />}
    //             choiceButtons={<AcceptDeclineButtons clickEffectOne={clickEffectOne} clickEffectTwo={clickEffectTwo} />}
    //         />
    //     )
    // })

    return (
        <div>
            <Paper>
                <List>
                    {artistOrder}
                </List>
            </Paper>

            <Paper>
                <List>
                    {artistRequests}
                </List>
            </Paper>
        </div>
    )
}

export default OrganizerDataTableView