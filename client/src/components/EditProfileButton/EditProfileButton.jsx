import React from 'react';
import { func, string } from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

const EditProfileButton = ({ clickEffect, status }) => (
  <IconButton
    onClick={() => (!status ? clickEffect(true) : clickEffect(false))}
    type="button"
  >
    <SettingsIcon />
  </IconButton>
);

EditProfileButton.propTypes = {
  clickEffect: func,
  status: string,
};

EditProfileButton.defaultProps = {
  clickEffect: func,
  status: string,
};

export default EditProfileButton;
