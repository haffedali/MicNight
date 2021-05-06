import React from 'react';
import PropTypes from 'prop-types';

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
          <Button onClick={handleFocusChange} className={classes.button} key={`DataTableController ${x * 3}`}>
            {button}
          </Button>
        ))}
      </ButtonGroup>

    </Container>
  );
};

DataTableViewController.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  buttons: PropTypes.array,
  handleFocusChange: PropTypes.func,
};

DataTableViewController.defaultProps = {
  buttons: ['one', 'two', 'three'],
  handleFocusChange: () => {},
};
export default DataTableViewController;
