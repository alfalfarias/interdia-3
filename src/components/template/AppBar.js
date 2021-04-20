import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Domain, AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({sessionName}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Domain />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Interfell
          </Typography>
          <Button
            color="inherit"
            startIcon={<AccountCircle />}
          >
            {sessionName || 'Iniciar sesión'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}