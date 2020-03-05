import React from 'react';
import { storiesOf } from '@storybook/react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import ProfileAvatar from "../src/components/ProfileAvatar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  greenBorder: {
      outline: 'dotted',
      outlineColor: 'green'
  },
  blueBorder: {
    outline: 'dotted',
    outlineColor: 'blue'
},
  redBorder: {
    outline: 'dotted',
    outlineColor: 'red'
}
}));

export function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className={classes.greenBorder} container spacing={2}>
          {/* <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid> */}
          <Grid className={classes.blueBorder} item xs={12} sm container>
            <Grid className={classes.redBorder} item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const useStylesCollapse = makeStyles(theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export function SimpleCollapse() {
  const classes = useStylesCollapse();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <div className={classes.container}>
        <Collapse in={checked} collapsedHeight={'10vw'}>
          <Paper elevation={4} className={classes.paper}>
            <ProfileAvatar height={'30vw'} width={'30vw'} photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbfjfo00ygCTK-Oqa9PCbrjei3vyolH9JQQWx8u9O46LoXTFC3" />
          </Paper>
        </Collapse>
      </div>
    </div>
  );
}



































storiesOf('Sandbox', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('ComplexGrid', () => <ComplexGrid />)
    .add('Collapse transition', ()=> <SimpleCollapse />)