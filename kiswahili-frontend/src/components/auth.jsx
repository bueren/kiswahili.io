import React, { useState } from 'react';

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Attempting login with", username, password);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Ingia</h1>
      <input
        type="text"
        placeholder="Jina la mtumiaji"
        className="border p-2 mb-2 w-full"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Nenosiri"
        className="border p-2 mb-2 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2 w-full" onClick={handleLogin}>
        Ingia
      </button>
    </div>
  );
}

export default Auth;