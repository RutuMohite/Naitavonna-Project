import React, { useState } from 'react';

const RegistrationForm = ({ onRegistration }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistration({ email, password });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f0f0f0', color: '#333' }}>
      <h2 style={{ marginBottom: '20px' }}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input style={{ width: '100%', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input style={{ width: '100%', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input style={{ width: '100%', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
