import { useState } from "react";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleOnLogin = () => {
    if (creds.username === "admin" && creds.password === "12345678") {
      setError(false);
      localStorage.setItem("login", "true");
      navigate("/home");
      return;
    }
    setError(true);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        gap={2}
        p={3}
        border="solid 1px lightgray"
        width="50vw"
      >
        <Typography variant="h3">Login</Typography>
        <TextField
          onChange={(e) =>
            setCreds((prev) => {
              return { ...prev, username: e.target.value };
            })
          }
          placeholder="Username"
        />
        <TextField
          onChange={(e) =>
            setCreds((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
          placeholder="Password"
          type="password"
        />
        <Button onClick={handleOnLogin}>Login</Button>
        {error && <Alert severity="error">Invalid credentials</Alert>}
      </Box>
    </Box>
  );
};

export default Login;
