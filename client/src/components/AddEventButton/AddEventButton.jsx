import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { propTypes } from 'prop-types';

const AddEventButton = ({ clickEffect, status }) => (
  <IconButton onClick={() => (!status ? clickEffect(true) : clickEffect(false))} type="button">
    <AddIcon fontSize="large" style={{ color: 'white' }} />
  </IconButton>
);

AddEventButton.propTypes = {
  status: propTypes.bool,
  clickEffect: propTypes.func,
};

AddEventButton.defaultProps = {
  status: false,
  clickEffect: () => {

  },
};
export default AddEventButton;
