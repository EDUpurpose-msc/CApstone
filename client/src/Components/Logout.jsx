import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Logout({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(false);
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    };
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
        <Button variant="contained" color="error" style={button} onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default Logout;