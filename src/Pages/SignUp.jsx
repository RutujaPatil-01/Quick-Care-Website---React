import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName && email && password) {
      alert('Sign up successful! You can now log in.');
      navigate('/login');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-main'>
        <p style={{ fontSize: '24px', fontWeight: '600' }}>Sign Up</p>
        <p>Please create an account to book appointment</p>

        <div style={{ width: '90%' }}>
          <p>Full Name</p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div style={{ width: '90%' }}>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div style={{ width: '90%' }}>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Sign Up</button>

        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </form>
  );
};

export default SignUp;
