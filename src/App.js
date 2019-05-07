import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import toRenderProps from 'recompose/toRenderProps';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import "./App.css";

const WithWidth = toRenderProps(withWidth());

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
  modal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    left: '50%',
    outline: 'none',
    padding: theme.spacing.unit * 4,
    position: 'absolute',
    transform: `translate(-50%, -50%)`,
    top: '50%',
    width: theme.spacing.unit * 50,
  },
});

class App extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        {
          <div className="App">
            <Grid container spacing={24}>
              <Grid item xs={12} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={3} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={3} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={3} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={3} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={3} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={3} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={3} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
              <Grid item xs={12} sm={3} xl={6}>
                <Paper className={classes.paper}><WithWidth>{({ width }) => <span>{`${width}`}</span>}</WithWidth></Paper>
              </Grid>
            </Grid>

            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOpen}>Open Modal</Button>

            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}>
              <div className={classes.modal}>
                <Typography variant="h6" id="modal-title">Text in a modal</Typography>
                <Typography variant="subtitle1" id="simple-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </div>
            </Modal>
          </div>
        }
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
