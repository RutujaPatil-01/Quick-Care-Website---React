import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (email === 'patilrutuja737@gmail.com' && password === '123456789') {
      alert('Login Successful!');
      navigate('/home'); 
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className='form-main'>
        <p style={{ fontSize: '24px', fontWeight: '600' }}>Login</p>
        <p>Please log in to book appointment</p>

        <div style={{ width: '90%' }}>
          <p>Email</p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ width: '90%' }}>
          <p>Password</p>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        <p>
          Create a new account? <Link to="/SignUp">Click here</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
