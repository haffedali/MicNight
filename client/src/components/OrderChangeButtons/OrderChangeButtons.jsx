import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';



const OrderChangeButtons = ({ clickEffectOne, clickEffectTwo }) => {
    return (
        <Container>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <IconButton onClick={() => clickEffectOne()} type={'button'}>
                        <ArrowUpward />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => clickEffectTwo()} type={'button'}>
                        <ArrowDownward />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OrderChangeButtons;