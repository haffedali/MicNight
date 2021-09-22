import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import userInfoType from '../../props/userInfoType';
import MainProfileAvatar from '../MainProfileAvatar';

// API UTILS
import users from '../../utils/users';

const EditProfileModal = ({ userInfo }) => {
  const [editUserInfo, setEditUserInfo] = useState({
    displayName: userInfo.displayName,
    tagLine: userInfo.tagLine,
    photoURL: userInfo.photoURL,
  });

  const useStyles = makeStyles({
    container: {
      width: '75vw',
      height: '75vh',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      borderRadius: '1rem',
      backgroundColor: '#f1f7f3',
    },
    avatar: {
      display: 'flex',
      justifyContent: 'center',
      top: '1rem',
    },
    formGroup: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    },
    formEntry: {
      padding: '2vw',
    },
    button: {
      padding: '2vw',
    },
    submitButton: {
      textAlign: 'center',
      padding: '3vw',
    },
  });

  const classes = useStyles();

  const handleTextFieldChanges = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    setEditUserInfo({ ...editUserInfo, [name]: value });
  };
  const handleSubmitChanges = () => {
    users.updateUserInfo(userInfo.uid, editUserInfo);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className={classes.avatar}>
        <MainProfileAvatar photoURL={userInfo.photoURL} />
      </div>
      <div className={classes.formGroup}>
        <div className={classes.formEntry}>
          <TextField
            id="standard-helperText"
            name="displayName"
            defaultValue={userInfo.displayName}
            onChange={(e) => handleTextFieldChanges(e)}
            helperText="Change up the name on em"
          />
        </div>
        <div className={classes.formEntry}>
          <TextField
            id="standard-helperText"
            name="tagLine"
            defaultValue={userInfo.tagLine}
            onChange={(e) => handleTextFieldChanges(e)}
            helperText="What are ya all about?"
          />
        </div>
        <div className={classes.submitButton}>
          <Button
            onClick={() => handleSubmitChanges()}
            variant="contained"
            color="primary"
          >
            Submit Changes
          </Button>
        </div>
      </div>
      <div className={classes.buttonGroup}>
        <div className={classes.button}>
          <Button variant="contained" disabled>
            Go Anonymous
          </Button>
        </div>

        <div className={classes.button}>
          <Button variant="contained" color="secondary">
            Logout
          </Button>
        </div>
      </div>
    </form>
  );
};

EditProfileModal.propTypes = {
  userInfo: userInfoType,
};

EditProfileModal.defaultProps = {
  userInfo: userInfoType,
};
export default EditProfileModal;
