import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import Button from '@material-ui/core';

const Button = () => {
    return (
        <div>
            <Button size="large">
                <MicRoundedIcon />
            </Button>
        </div>
    )
}

export default Button;