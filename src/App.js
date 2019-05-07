import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    color: indigo[500],
    margin: theme.spacing.unit, 
    fontSize: 32,
  },
  link: {
    margin: theme.spacing.unit,
  },
});

const dudUrl = 'javascript:;';

function App(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      {
        <div className="App">
          <Typography variant="h2" gutterBottom>h2. Heading</Typography>
          <Grid container className={classes.root}>
            <Grid item xs={4}>
              <Typography>Filled</Typography>
            </Grid>
            <Grid item xs={8}>
              <DeleteIcon className={classes.icon} />
              <DeleteForeverIcon className={classes.icon} />
            </Grid>
          </Grid>
          <Typography>
            <Link href="http://google.com" className={classes.link}>Link</Link>
            <Link href={dudUrl} color="inherit" className={classes.link}>{'color="inherit"'}</Link>
            <Link href={dudUrl} variant="body1" className={classes.link}>{'variant="body1"'}</Link>
            <Link component="button" variant="body2" onClick={() => { alert("I'm a button."); }}>Button Link</Link>
          </Typography>
        </div>
      }
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
