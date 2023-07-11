import React, { useState } from "react";
const UserForm2 = ({ eUser }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            email,
            password,
        };
        console.log(newUser);
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setconfirmPassword(e.target.value);
    };
    const usernameError = (
        <div>
            <p>Username must be at least 2 characters</p>
        </div>
    );
    const emailError = (
        <div>
            <p>Email must be at least 5 characters</p>
        </div>
    );
    const passwordError = (
        <div>
            <p>Password must be at least 8 characters</p>
        </div>
    );
    const passwordMatchError = (
        <div>
            <p>Passwords must match</p>
        </div>
    );
    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username:</label>
                <input type="text" onChange={handleUsernameChange} value={username} />
                {username.length < 2 && usernameError}
            </div>
            <div>
                <label>Email Address:</label>
                <input type="text" onChange={handleEmailChange} value={email} />
                {email.length < 5 && emailError}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={handlePasswordChange} value={password} />
                {password.length < 8 && passwordError}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                {password.length < 8 || password !== confirmPassword && passwordMatchError}
            </div>
            <button>create</button>
        </form>
        
    );

};

export default UserForm2;