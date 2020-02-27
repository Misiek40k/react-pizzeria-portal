import React from 'react';
import { Link } from 'react-router-dom';
import { settings } from '../../../data/dataStore';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import styles from './Login.module.scss';

const Login = () => {
  const url = settings.url;

  return (
    <Container maxWidth='lg'>
      <form className={styles.component} autoComplete="off">
        <TextField
          className={styles.textField}
          required
          id="login"
          label="Login"
        />
        <TextField
          className={styles.textField}
          required
          id="password"
          label="Password"
          type="password"
        />
        <Button className={styles.button} variant="contained" color="primary" component={Link} to={`${url}/`}>
          LOGIN
        </Button>
      </form>
    </Container>
  );
};

export default Login;
