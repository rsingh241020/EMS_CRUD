import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../services/employeeService';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Could not load employees');
    }
  };

  useEffect(() => { fetchEmployees(); }, []);

  const handleDelete = async (id) => {
    const ok = window.confirm('Delete this employee?');
    if (!ok) return;
    try {
      await deleteEmployee(id);
      toast.success('Employee deleted');
      setEmployees((prev) => prev.filter(e => e.id !== id));
    } catch (err) {
      console.error(err);
      toast.error('Delete failed');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Employees</h2>
        <button
          onClick={() => navigate('/add-employee')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Employee
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Emp Id</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">First Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Last Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {employees.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">No employees found.</td>
              </tr>
            ) : (
              employees.map(emp => (
                <tr key={emp.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{emp.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{emp.firstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{emp.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{emp.phoneNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{emp.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Link
                      to={`/edit-employee/${emp.id}`}
                      className="mr-3 text-sm px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(emp.id)}
                      className="text-sm px-3 py-1 border rounded text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
