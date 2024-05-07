import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteEmployee = () => {
  const [empList, setEmpList] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setEmpList(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleDelete = () => {
    
    const updatedList = empList.filter(emp => emp.id !== selectedEmployeeId);
    setEmpList(updatedList);
    setSelectedEmployeeId('');
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#dc3545" }}>Delete Employee</h1>
    <label style={{ display: "block", marginBottom: "10px" }}>
        Select Employee:
        <select value={selectedEmployeeId} onChange={(e) => setSelectedEmployeeId(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "10px" }}>
            <option value="">Select an employee</option>
            {empList.map(employee => (
                <option key={employee.id} value={employee.id}>{employee.name}</option>
            ))}
        </select>
    </label>
    <button onClick={handleDelete} disabled={!selectedEmployeeId} style={{ backgroundColor: "#dc3545", color: "#fff", padding: "10px 20px", borderRadius: "4px", border: "none", cursor: "pointer", width: "100%" }}>Delete</button>
</div>
  );
};

export default DeleteEmployee;