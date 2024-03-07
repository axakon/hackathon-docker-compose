import Link from 'next/link';
import { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      // Implement the registration logic here using the new API route
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage('User registered successfully');
      } else {
        setMessage('Registration failed: ' + response.statusText);
      }
    } catch (error: any) {
      console.error('Registration failed: ', error.message);
    }
  };

  return (
    <form className="max-w-sm mx-auto mt-8" onSubmit={handleRegister}>
      <h1 className="text-2xl mb-4">Register Page</h1>
      <p className="font-semibold m-4">{message}</p>
      <label className="block mb-2">
        Username:
        <input
          className="w-full p-2 border rounded"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label className="block mb-2">
        Password:
        <input
          className="w-full p-2 border rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button 
        className="bg-blue-500 text-white p-2 rounded" 
        type="submit">
          Register
      </button>
      <Link className="text-blue-500 ml-4" href="/">Back</Link>
    </form>
  );
};

export default RegisterForm;