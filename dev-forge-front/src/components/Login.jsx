import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'test' && password === 'test') {
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };


    return (
        <div>
            <h2> Login</h2>
            <input>
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            </input>

            <input>
                type="password"
                value='{password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            </input>

            <button onClick={handleLogin}>Login</button>
        </div>
    );

}






export default Login;