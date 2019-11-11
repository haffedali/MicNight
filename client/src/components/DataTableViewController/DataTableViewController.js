import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';


const DataTableViewController = (props) => {
    const [focus, setFocus] = useState("Artists");

    let useStyles = makeStyles({
        buttonGroup: {

        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            padding:'1vw',
            maxWidth:'sm'
        },
        artistButton: {
 
        },
        eventsButton: {

        },
        micMatesButton: {

        }

    })


    const classes = useStyles();


    return (
        <Container className={classes.container}>
            <ButtonGroup
                variant="text"
                color="secondary"
                size="large"
            >
                <Button value='events' onClick={props.handleFocusChange} className={classes.artistButton} color="secondary">
                    Events
            </Button>
                <Button value='artists' onClick={props.handleFocusChange} className={classes.eventsButton} color="secondary">
                    Artists
            </Button>
                <Button value='micmates' onClick={props.handleFocusChange} className={classes.micMatesButton} color="secondary">
                    MicMates
            </Button>
            </ButtonGroup>

        </Container>
    )
}

export default DataTableViewController;