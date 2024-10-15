import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track which form to show
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to toggle between login and register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (isLogin) {
      console.log("Logging in...");
      navigate('/home'); // Use navigate to go to home
    } else {
      console.log("Registering...");
      navigate('/loginpage'); // Use navigate to go to login page
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {isLogin ? (
        <form className="login-form" >
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" onSubmit={handleSubmit}>Login</button>
        </form>
      ) : (
        <form className="register-form" >
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm your password" required />
          </div>
          <button type="submit" onSubmit={handleSubmit}>Register</button>
        </form>
      )}

      {/* Toggle between login and register */}
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default LoginRegister;
