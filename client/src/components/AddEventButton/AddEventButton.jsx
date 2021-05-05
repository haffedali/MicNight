import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { PropTypes } from 'prop-types';

const AddEventButton = ({ clickEffect, status }) => (
  <IconButton onClick={() => (!status ? clickEffect(true) : clickEffect(false))} type="button">
    <AddIcon fontSize="large" style={{ color: 'white' }} />
  </IconButton>
);

AddEventButton.propTypes = {
  status: PropTypes.bool,
  clickEffect: PropTypes.func,
};

AddEventButton.defaultProps = {
  status: false,
  clickEffect: () => {

  },
};
export default AddEventButton;
