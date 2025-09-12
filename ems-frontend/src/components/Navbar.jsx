import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-2xl font-bold tracking-wide">Employee Management</div>

        {/* Right side actions */}
        <div>
          <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
