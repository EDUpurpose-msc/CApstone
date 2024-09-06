import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logout from './Logout';
import logo from '/logo.png';

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const button = {
        marginRight: '20px',
        fontSize: '12px',
        fontWeight: '700',
        padding: '0.3rem 1.4rem',
        background: '#fff',
        borderRadius: '40px',
        color: '#333',
        boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
        textTransform: 'none',
        fontFamily: '"Poppins", sans-serif',
    };

    return (
        <AppBar sx={{ bgcolor: '#F7F7BA', boxShadow: 'none' }}>
            <img src={logo} alt="Logo" style={{ position: "absolute", top: "0px", left: "20px", width: "50px" }} /> 
            <Toolbar sx={{ padding: '5px', borderBottom: '2px solid rgba(255, 255, 255, .2)' }}>
                <Typography 
                    variant="h4" 
                    component="div" 
                    sx={{ flexGrow: 1, color: '#333', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize: "1.5rem",marginLeft: "3rem"}}>
                    EcoStats
                </Typography>
                {!isLoggedIn ? (
                    <>
                        <Button variant="contained" style={button} color="error" component={Link} to="/login">
                            Login 
                        </Button>

                        <Button variant="contained" style={button} color="success" component={Link} to="/signup">
                            Signup
                        </Button>
                    </>
                ) : (
                    <Logout setIsLoggedIn={setIsLoggedIn} />
                )}
            </Toolbar>
        </AppBar>
    );
};