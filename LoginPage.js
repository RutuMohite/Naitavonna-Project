import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginFrom';
import RegistrationForm from './RegistrationFrom';

const LoginPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = (userData) => {
    console.log('Registration data:', userData);
    setRegistrationSuccess(true);
    setTimeout(() => {
      setShowRegistration(false);
    }, 3000);
  };

  const handleLogin = (email, password) => {
    console.log('Login data:', email, password);
    navigate('/ticket');
  };

  const onClickRegister = () => {
    setShowRegistration(true);
  };

  return (
    <div>
      <h1>Login</h1>

      <LoginForm onLogin={handleLogin} />
      <div style={{ display: 'flex', justifyContent: 'center' }} className="registration-button-container">
        <button onClick={onClickRegister}>Register</button>
      </div>
      {showRegistration && <RegistrationForm onRegistration={handleRegistration} />}
      {registrationSuccess && (
        <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          Registration successful! You can now login.
        </div>
      )}
    </div>
  );
};

export default LoginPage;
