import React from "react"
import { AppBar, Toolbar, IconButton, Typography, Button, Menu as MenuIcon } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
          <Menu>
            <MenuItem>Search</MenuItem>
            <MenuItem>Saved</MenuItem>
          </Menu>
        </IconButton>
        <Typography variant="h6">
        Google Books Search
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header