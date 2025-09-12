import React, { useState } from 'react';
import { createEmployee } from '../services/employeeService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddEmployee() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: ''
  });

  const navigate = useNavigate();

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee(form);
      toast.success('Employee created');
      navigate('/employees');
    } catch (err) {
      console.error(err);
      toast.error('Create failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Add Employee
      </h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={onChange}
            required
            className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            required
            className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            name="phoneNo"
            value={form.phoneNo}
            onChange={onChange}
            type="text"
            className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            required
            className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate('/employees')}
            className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
