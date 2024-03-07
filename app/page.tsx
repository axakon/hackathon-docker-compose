import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Welcome to the Docker Compose Demo!</h1>
        <div className="mb-4">
          <Link className="text-blue-500 mr-4" href="/register">
            Register
          </Link>
          <span className="text-gray-500">|</span>
          <Link className="text-blue-500 ml-4" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
