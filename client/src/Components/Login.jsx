import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'boxicons/css/boxicons.min.css';
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";


function Login({ setIsLoggedIn, isLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Success") {
                    axios.get('http://localhost:3001/user', { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                                setIsLoggedIn(true);
                                navigate("/home", { state: { user: response.data.user } });
                            }
                        });
                } else {
                    alert("Login failed");
                }
            })
            .catch(err => console.log(err));
    };
    const containerStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    
    const paperStyle = {
        padding: "2rem",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",  
        backgroundColor: "rgba(255, 255, 255, 0.1)", 
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        width: "100%",
        maxWidth: "400px",
    };
    
    const heading = {
        fontSize: "2rem",
        fontWeight: "600",
        color: "#fff",
        marginBottom: "1.5rem",
        fontFamily: '"Poppins", sans-serif',
    };
    
    const row = {
        display: "flex",
        marginTop: "1rem",
        marginBottom: "1rem",
        alignItems: "center",
        color: "#fff",
    };
    
    const textFieldStyle = {
        '& .MuiInputBase-root': {
            color: "#fff",
        },
        '& .MuiInputLabel-root': {
            color: "rgba(255, 255, 255, 0.7)",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
            },
            '&:hover fieldset': {
                borderColor: '#fff',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#fff',
            },
        },
    };
    
    const btnStyle = {
        marginTop: "1.5rem",
        padding: "0.7rem",
        fontSize: "1rem",
        fontWeight: "700",
        borderRadius: "30px",
        backgroundColor: "#fff",
        color: "#333",
        width: "100%",
        textTransform: "none",
    };
    
    const linkStyle = {
        color: "#fff",
        fontWeight: "600",
        textDecoration: "none",
        marginTop: "1rem",
    };
    
    return (
        <div style={containerStyle}>
            
            <Grid align="center">
                <Paper style={paperStyle} sx={{ width: { xs: '80vw', sm: '50vw', md: '40vw', lg: '30vw', xl: '20vw' }, height: { lg: '50vh' } }}>
                    <Typography component="h1" variant="h5" style={heading}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <span style={row}>
                            <TextField sx={textFieldStyle} label="Email" fullWidth variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </span>
                        <span style={row}>
                            <TextField sx={textFieldStyle} label="Password" fullWidth variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </span>
                        <Button style={btnStyle} variant="contained" type="submit">Login</Button>
                    </form>
                    <p style={linkStyle}>Don't have an account? <Link href="/signup" style={{ color: "#fff", textDecoration: "underline" }}>SignUp</Link></p>
                </Paper>
            </Grid>
        </div>
    );
}

export default Login;