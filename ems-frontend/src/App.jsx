import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="min-h-screen flex">
      <h1 className="text-3xl font-bold text-blue-600">Hello EMS</h1>

      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/employees" replace />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
          </Routes>
        </main>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
