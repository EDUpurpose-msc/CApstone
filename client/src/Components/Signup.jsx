import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'boxicons/css/boxicons.min.css';
import { Grid, Link, Button, Paper, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userRole, setUserRole] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        axios.post("http://localhost:3001/signup", { username, email, password, userRole })
            .then(result => {
                if (result.status === 201) {
                    navigate("/login");
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Registration failed. Please try again.");
                } else {
                    console.log(err);
                }
            });
    };

    const containerStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const glassEffectStyle = {
        padding: "2rem",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        width: "90%",
        maxWidth: "400px",
    };

    const headingStyle = {
        fontSize: "2rem",
        fontWeight: "600",
        color: "#fff",
        marginBottom: "1.5rem",
        fontFamily: '"Poppins", sans-serif',
    };

    const textFieldStyle = {
        marginBottom: "1rem",
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
            <Paper style={glassEffectStyle}>
                <Typography component="h1" variant="h5" style={headingStyle}>Register</Typography>
                <form onSubmit={handleSignup}> {/* Updated handler */}
                    <TextField
                        sx={textFieldStyle}
                        label="Username"
                        fullWidth
                        variant="outlined"
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        sx={textFieldStyle}
                        label="Email"
                        fullWidth
                        variant="outlined"
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        sx={textFieldStyle}
                        label="Password"
                        fullWidth
                        variant="outlined"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        sx={textFieldStyle}
                        label="Confirm Password"
                        fullWidth
                        variant="outlined"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FormControl fullWidth sx={{ marginBottom: "1rem", ...textFieldStyle }}>
                        <InputLabel sx={{ color: "rgba(255, 255, 255, 0.7)" }}>User Role</InputLabel>
                        <Select
                            value={userRole}
                            label="User Role"
                            onChange={(e) => setUserRole(e.target.value)}
                            sx={{ color: "#fff" }}
                        >
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="Supervisor">Supervisor</MenuItem>
                            <MenuItem value="Land Focal">Land Focal</MenuItem>
                            <MenuItem value="Bio-Wildlife Focal">Bio-Wildlife Focal</MenuItem>
                            <MenuItem value="Forestry Focal">Forestry Focal</MenuItem>
                        </Select>
                    </FormControl>
                    <Button style={btnStyle} variant="contained" type="submit">Register</Button>
                </form>
                <Typography style={linkStyle}>
                    Already have an account? <Link href="/login" style={{ color: "#fff", textDecoration: "underline" }}>Login</Link>
                </Typography>
            </Paper>
        </div>
    );
}

export default SignUp;
