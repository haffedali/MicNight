import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';



const AcceptDeclineButtons = ({ clickEffectOne, clickEffectTwo }) => {
    return (
        <Container>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <IconButton onClick={() => clickEffectOne()} type={'button'}>
                        <CheckIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => clickEffectTwo()} type={'button'}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AcceptDeclineButtons;