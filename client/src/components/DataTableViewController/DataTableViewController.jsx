import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const DataTableViewController = ({ buttons, handleFocusChange }) => {
  const useStyles = makeStyles({
    buttonGroup: {

    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1vw',
      maxWidth: 'lg',
    },
    viewControls: {

    },
    button: {
      paddingLeft: '3vw',
      paddingRight: '3vw',
    },

  });


  const classes = useStyles();


  return (
    <Container className={classes.container}>
      <ButtonGroup
        className={classes.viewControls}
        variant="text"
        color="secondary"
        size="medium"
      >
        {buttons.map((button, x) => (
          <Button onClick={handleFocusChange} className={classes.button} key={`DataTableController ${x}`}>
            {button}
          </Button>
        ))}
      </ButtonGroup>

    </Container>
  );
};

export default DataTableViewController;
