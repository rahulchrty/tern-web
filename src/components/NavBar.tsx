import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar =() => {
    return(
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <Typography color='inherit'>
                        Tern-ToDo
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;