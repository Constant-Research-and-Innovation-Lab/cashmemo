// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Cashmemo
                </Typography>
                <Box>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    <Button component={Link} to="/login" color="inherit">Login</Button>
                    <Button component={Link} to="/register" color="inherit">Register</Button>
                    <Button component={Link} to="/pricing" color="inherit">Pricing</Button>
                    <Button component={Link} to="/demo" color="inherit">Demo</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
