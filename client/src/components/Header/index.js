import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { PlayCircleFilledWhite } from "@material-ui/icons";

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
  headerButton: {
    color: 'white'
  }
}));

export default function Header() {
  const classes = useStyles()
  const preventDefault = (event) => event.preventDefault()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>  
          <Button href='/search' onClick={preventDefault} className={classes.headerButton}>
            Search Books
          </Button>
          <Button href='/saved' onClick={preventDefault} className={classes.headerButton}>
            Saved Books
          </Button>
          <Typography variant="h6" className={classes.title}>
          Google Books Search
          </Typography>
         </Toolbar>
      </AppBar>
    </div>
  )
}

