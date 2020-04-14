import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'

const DataTableItemChoiceContainer = ({ dataTableItem, choiceButtons}) => {
    return(
        <Container>
            <Grid container alignItems="center">
                <Grid item>
                    {dataTableItem}
                </Grid>
                <Grid item>
                    {choiceButtons}
                </Grid>
            </Grid>
        </Container>
    )
}

export default DataTableItemChoiceContainer