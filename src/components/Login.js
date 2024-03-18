import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    const response = await fetch('https://landsbygarn.dk/api/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${username}&password=${password}`,
    });

    const data = await response.json();

    if (data.success) {
      setLoggedIn(true);
    } else {
      console.log('Login failed:', data.message);
    }
  };

  const handleLogout = async () => {
    const response = await fetch('https://landsbygarn.dk/api/login.php?logout=1');
    const data = await response.json();

    if (data.success) {
      setLoggedIn(false);
    } else {
      console.log('Logout failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        {loggedIn ? (
          <>
            <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <input
              className="w-full mb-4 p-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full mb-4 p-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
