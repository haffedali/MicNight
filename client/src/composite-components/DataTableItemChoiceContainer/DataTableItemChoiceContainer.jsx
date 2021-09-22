import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// eslint-disable-next-line react/prop-types
const DataTableItemChoiceContainer = ({ dataTableItem, choiceButtons }) => (
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
);

export default DataTableItemChoiceContainer;
