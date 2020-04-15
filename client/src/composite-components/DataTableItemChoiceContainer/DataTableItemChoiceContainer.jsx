import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'

const DataTableItemChoiceContainer = ({ dataTableItem, choiceButtons}) => {

    return(
        <Container>
            <Grid container alignItems="center">
                <Grid item xs={11}>
                    {dataTableItem}
                </Grid>
                <Grid item xs={1}>
                    {choiceButtons}
                </Grid>
            </Grid>
        </Container>
    )
}

export default DataTableItemChoiceContainer