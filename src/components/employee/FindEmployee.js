import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindEmployee = () => {
  const [empList, setEmpList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setEmpList(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  useEffect(() => {
    const results = empList.filter(emp =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(results);
  }, [searchTerm, empList]);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#007bff" }}>Find Employee</h1>
    <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "20px" }}
    />
    <ul style={{ listStyle: "none", padding: 0 }}>
        {searchResult.map(employee => (
            <li key={employee.id} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                <div style={{ fontWeight: "bold", marginBottom: "5px" }}>Name: {employee.name}</div>
                <div>Username: {employee.username}</div>
                <div>Email: {employee.email}</div>
                <div>City: {employee.address.city}</div>
            </li>
        ))}
    </ul>
</div>

  );
};

export default FindEmployee;