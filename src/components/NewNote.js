import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const NewNote = (props) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.buttonLabel}
        </Typography>
        <form className={props.classes.form} noValidate onSubmit={props.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            value={props.newNote.title}
            required
            fullWidth
            id="email"
            label="title"
            name="title"
            autoComplete="title"
            autoFocus
            onChange = {props.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={props.newNote.content}
            fullWidth
            name="content"
            label="content"
            id="content"
            autoComplete="content"
            onChange = {props.handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="favourite" color="primary" />}
            label="Favourite"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={props.classes.submit}
          >
            {props.buttonLabel}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default NewNote;