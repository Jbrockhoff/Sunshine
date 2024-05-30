import React, { useState } from 'react';
import './App.css'; // Import CSS file

// Form component
const SignInForm = ({ onSubmit, email, setEmail, password, setPassword }) => (
    <form onSubmit={onSubmit}>
        <label>
            Email:
            <input type="email" value={email} onChange={({ target: { value } }) => setEmail(value)} required />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} required />
        </label>
        <button type="submit">Sign In</button>
    </form>
);

const Signin = () => {
    // State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign-in logic here
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="signin">
            <h2>Sign In</h2>
            <SignInForm 
                onSubmit={handleSubmit} 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
            />
        </div>
    );
};

export default Signin;