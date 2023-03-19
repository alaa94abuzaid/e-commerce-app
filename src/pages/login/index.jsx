import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { Users } from "../../AuthData";
import { useSessionContext } from "../../hooks";
import styles from "./login.module.scss";

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useSessionContext();

  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [error, setError] = useState(undefined);

  const handleLogin = () => {
    const index = Users.findIndex((ele) => ele.username === username);
    if (index !== -1 && Users[index].password === password) {
      setUser(username);
      navigate("/");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <TextField
        required
        id="outlined-required"
        label="Username"
        value={username}
        variant="outlined"
        onChange={(e) => {
          setError(undefined);
          setUsername(e.target.value);
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => {
          setError(undefined);
          setPassword(e.target.value);
        }}
      />
      <Button size="large" variant="outlined" onClick={handleLogin}>
        Login
      </Button>
      <div className={styles.errorWrapper}>
        {error && <Alert severity="error">{error}</Alert>}
      </div>
    </div>
  );
};
