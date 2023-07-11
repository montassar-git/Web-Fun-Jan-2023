import React, { useState } from "react";
const UserForm2 = ({ eUser }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                <button class="btn btn-primary">create</button> <br />
            username:{JSON.stringify(username)} <br />
            email:{JSON.stringify(email)} <br />
            password:{JSON.stringify(password)} <br />
        </form>
    );

};
    
export default UserForm2;