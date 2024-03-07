import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      // Implement the login logic here using the new API route
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { userId } = await response.json();
        localStorage.setItem('userId', userId);

        setMessage('User logged in successfully');
        router.push('/dashboard');
      } else {
        setMessage('Login failed: ' + response.statusText);
      }
    } catch (error: any) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <form className="max-w-sm mx-auto mt-8" onSubmit={handleLogin}>
      <h1 className="text-2xl mb-4">Login Page</h1>
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
      <label className="block mb-2">
        Password:
        <input
          className="w-full p-2 border rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">
        Login
      </button>
      <Link className="text-blue-500 ml-4" href="/">Back</Link>
    </form>
  );
};

export default LoginForm;