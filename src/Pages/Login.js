import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../components/authentication/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            if (!response.ok) {
                // fetch failed
            }

            const data = await response.json();
            if (data.status === 1) {
                const token = data.data.token;
                const id = data.data._id;
                login(token, id);

                // Redirect to a protected route or perform other actions
                navigate('/Overview');
            }

        } catch (error) {
            console.error('Login error:', error);
            // Handle login error
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
