import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, UserPlus } from 'lucide-react'; // lucide-react icons use kar rahe hain

const linkClass = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-3 rounded-lg mt-2 font-medium transition 
   ${isActive ? 'bg-blue-600 text-white shadow' : 'text-gray-700 hover:bg-gray-100'}`;

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r min-h-screen p-6 hidden md:block shadow-sm">
      {/* Sidebar Header */}
      <div className="mb-8 text-2xl font-bold text-blue-600">Admin</div>

      {/* Navigation */}
      <nav className="space-y-2">
        <NavLink to="/employees" className={linkClass}>
          <Users size={18} />
          Employee List
        </NavLink>
        <NavLink to="/add-employee" className={linkClass}>
          <UserPlus size={18} />
          Add Employee
        </NavLink>
      </nav>
    </aside>
  );
}
