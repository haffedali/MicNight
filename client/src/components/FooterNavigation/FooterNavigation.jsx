import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export default function FooterNavigation() {
  const useStyles = makeStyles({
    bar: {
      background: 'linear-gradient(45deg, #AE6bf2 30%, #CFB4C8 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(173, 135, 210, .5)',
      color: 'white',
      height: '8vh',
      padding: '0 30px',
    },
  });

  const classes = useStyles();

  const [value, setValue] = useState('/');

  const handleChange = (event) => {
    setValue(event);
  };

  return (
    <div>
      <div>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            handleChange(newValue);
          }}
          showLabels
          className={classes.bar}
        >
          <BottomNavigationAction
            component={Link}
            to="/discover"
            value="nearby"
            label="Nearby"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/"
            value="/"
            label="Mic"
            icon={<MyLocationIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="user"
            value="user"
            label="Me"
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}
