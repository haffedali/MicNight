import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import ProfileAvatar from '../ProfileAvatar';
import ProfileCard from '../../composite-components/ProfileCard';
import SocialLinks from '../../components/SocialLinks';

const CurrentArtistDisplay = () => (
   <Paper>
       <ProfileCard />
       <SocialLinks />
   </Paper>
)

export default CurrentArtistDisplay