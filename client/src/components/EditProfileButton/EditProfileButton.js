import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';



const EditProfileButton = () => {
    return (<IconButton type={'button'}>
        <SettingsIcon />
    </IconButton>)
}

export default EditProfileButton;