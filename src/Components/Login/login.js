import React from "react";
import { useState } from "react";

export const Login = () => {
    // Model
    const [loginCredentials, setLoginCredentials] = useState({
        username: "",
        password: "",
    });

    // Handlers
    const [error, setError] = useState("");

    // Update
    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            loginCredentials.username === "admin" &&
            loginCredentials.password === "admin"
        ) {
            alert("Login Successful");
        } else {
            setError("Invalid username or password");
        }
    };

    const handleUsername = (event) => {
        setLoginCredentials({
            ...loginCredentials,
            username: event.target.value,
        });
        setError("");
    };

    const handlePassword = (event) => {
        setLoginCredentials({
            ...loginCredentials,
            password: event.target.value,
        });
        setError("");
    };

    const ifError = (error) => {
        return error ? true : false;
    };

    // View
    return (
        <div>
            <h1>GoldApp</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={loginCredentials.username}
                    onChange={handleUsername}
                    placeholder="Username"
                    required={true}
                />
                <input
                    type="password"
                    value={loginCredentials.password}
                    onChange={handlePassword}
                    placeholder="Password"
                    error={ifError(error)}
                    required={true}
                />
                {error.length > 0 ? "Email is min" : null}
                <br></br>
                <button>Login</button>
                <button>Register</button>
                <p>{error}</p>
            </form>
        </div>
    );
};
