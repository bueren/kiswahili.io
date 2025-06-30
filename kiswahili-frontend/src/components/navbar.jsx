import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-wrap gap-4 justify-center">
      <Link to="/" className="hover:underline">Mwanafunzi</Link>
      <Link to="/lessons" className="hover:underline">Masomo</Link>
      <Link to="/games" className="hover:underline">Michezo</Link>
      <Link to="/quiz" className="hover:underline">Majaribio</Link>
      <Link to="/chat" className="hover:underline">Mwalimu</Link>
      <Link to="/admin" className="hover:underline">Admin</Link>
      <Link to="/login" className="hover:underline">Ingia</Link>
    </nav>
  );
}

export default Navbar;
