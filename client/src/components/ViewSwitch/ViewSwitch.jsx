import React from 'react';
import { func, string } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const ViewSwitch = ({ clickHandler, viewState }) => {
  const useStyles = makeStyles({
    text: {
      color: '#f1f7f3',
    },
  });

  const classes = useStyles();
  return (
    <Fab onClick={() => clickHandler()} style={{ background: 'linear-gradient(45deg, #AE6bf2 30%, #CFB4C8 90%', width: '100%' }}>
      {viewState === 'Upcoming'
        ? <Typography className={classes.text} color="inherit" variant="button">Event Chat</Typography>
        : <Typography className={classes.text} color="inherit" variant="button">Who&apos;s Here?</Typography>}
    </Fab>
  );
};

// e => view === 'Upcoming' ? setView('Guests') : setView('Upcoming')
ViewSwitch.propTypes = {
  clickHandler: func,
  viewState: string,
};

ViewSwitch.defaultProps = {
  clickHandler: () => {},
  viewState: '',
};
export default ViewSwitch;
