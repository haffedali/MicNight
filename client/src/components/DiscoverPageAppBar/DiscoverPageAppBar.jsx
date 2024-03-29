import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import AddEventButton from '../AddEventButton';
import DiscoverPageAppBarType from '../../props/DiscoverPageAppBarType';

const DiscoverPageAppBar = ({
  clickEffect, status, setSearchTerm, search,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      background: 'linear-gradient(45deg, #CFB4C8 2.5%, #AE6bf2 90%)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    addIcon: {
      marginLeft: '1rem',
    },
  }));

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const inputProps = {
    arialLabel: 'Search',
    onKeyPress: handleKeyPress,
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e) => handleInputChange(e)}
              inputProps={
                  inputProps
                }
            />
          </div>
          <AddEventButton status={status} clickEffect={clickEffect} />
        </Toolbar>
      </AppBar>
    </div>

  );
};


export default DiscoverPageAppBar;
