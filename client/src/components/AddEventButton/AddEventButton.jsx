import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';



const AddEventButton = ({clickEffect, status}) => {
    return (
    <IconButton onClick={()=> !status ? clickEffect(true) : clickEffect(false)}type={'button'}>
        <AddIcon fontSize="medium" style={{color: 'white'}} />
    </IconButton>)
}

export default AddEventButton;