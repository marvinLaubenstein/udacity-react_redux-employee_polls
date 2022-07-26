import React, { useRef } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAuthUserLogin } from '../../actions/authedUser';

const LoginScreen = (props) => {
  const usernameValueRef = useRef('');
  const passwordValueRef = useRef('');

  const handleClick = (event) => {
    props.dispatch(
      handleAuthUserLogin(
        usernameValueRef.current.value,
        passwordValueRef.current.value
      )
    );
    event.preventDefault();
  };

  if (props.isLoggedIn) {
    return <Navigate to={-1} />;
  }

  return (
    <Grid>
      <Paper
        className="login-screen-paper"
        elevation={10}
        style={{
          padding: '20px',
          width: 280,
          margin: '20px auto',
        }}
      >
        <Grid align="center">
          <Avatar style={{ backgroundColor: '#04aa6d' }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Welcome-Login</h2>
        </Grid>
        <TextField
          style={{ paddingBottom: '10px' }}
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
          required
          value="tylermcginnis"
          inputRef={usernameValueRef}
        />
        <TextField
          style={{ paddingBottom: '10px' }}
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value="abc321"
          inputRef={passwordValueRef}
        />
        <Button
          style={{ padding: '10px', background: '#04aa6d' }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleClick}
        >
          Login
        </Button>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  isLoggedIn: !!authedUser,
});

export default connect(mapStateToProps)(LoginScreen);
