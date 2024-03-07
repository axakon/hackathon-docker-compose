"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      router.push('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Welcome to the Docker Demo Dashboard!</h1>
        <p>This page is secret and can only be accessed if you are logged in correctly (or speed-run the challange and wrote your userid into local storage :D)</p>
        <div className="m-4">
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}