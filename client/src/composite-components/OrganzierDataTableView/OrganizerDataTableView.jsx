import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const OrganizerDataTableView = ({ name, artists }) => {
    const useStyles = makeStyles({
        listContainer: {
            backgroundColor: 'pink',
            padding: '1vw'
        }
    });
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
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.listContainer} border={2} borderRadius={12} borderColor='#90a4ae' display='flex' flexDirection='column'>
                {name}
                <Paper>
                    <List>
                        {artists}
                    </List>
                </Paper>
            </Box>
        </div>
    )
}

export default OrganizerDataTableView