import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';



const EditProfileButton = ({clickEffect, status}) => {
    return (<IconButton onClick={()=> !status ? clickEffect(true) : clickEffect(false)}type={'button'}>
        <SettingsIcon />
    </IconButton>)
}

export default EditProfileButton;