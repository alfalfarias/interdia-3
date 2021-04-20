import { Card, CardContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import MuiAlert from '@material-ui/lab/Alert';

import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      'margin-bottom': theme.spacing(2),
    },
    '& .MuiButton-root': {
      'margin-top': theme.spacing(2),
    },
    '& .MuiAlert-root': {
      'margin-top': theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Login({loginAction}) {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'user') {
      setUser(event.target.value);
    }
    if (event.target.name === 'pass') {
      setPass(event.target.value);
    }
  };

  const login = async () => {
    try {
      setHasError(false);
      setIsLoading(true);
      await loginAction(user, pass);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
      throw error;
    }
  };

  const error = (
    <MuiAlert elevation={6} variant="filled" severity="error" >
      Error de inicio de sesión
    </MuiAlert>
  );

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            Ingreso al sistema
          </Typography>

          <form noValidate autoComplete="off">
            <TextField 
            label="Usuario" 
            fullWidth 
            name="user"
            value={user}
            onChange={handleChange}
            />
            <TextField 
            label="Contraseña" 
            type="password"
            fullWidth 
            name="pass"
            value={pass}
            onChange={handleChange}
            />

            <Button
              color="primary"
              variant="contained"
              fullWidth
              disabled={isLoading}
              onClick={login}
            >
              Iniciar sesión
            </Button>

            {isLoading ? <LinearProgress /> : null}

            {hasError && error}
          </form>
        </CardContent>
      </Card>


    </div>
  );
};

export default Login;
