import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateEmployee = () => {
  const [empList, setEmpList] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    city: ''
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setEmpList(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send an HTTP request to update the employee data
    // For demonstration purpose, let's just log the updated data
    console.log("Updated data:", updateData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    <h1 style={{ textAlign: "center", marginBottom: "20px", color: "purple" }}>Update Employee</h1>
    <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "10px", color : "orange"}}>
            Select Employee:
            <select name="id" onChange={handleInputChange} value={updateData.id} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", marginBottom: "10px", }}>
                <option value="" style={{color : "orange"}}>Select an employee</option>
                {empList.map(employee => (
                    <option key={employee.id} value={employee.id}>{employee.name}</option>
                ))}
            </select>
        </label>
        <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px", color : "orange"}}>Name:</label>
            <input type="text" name="name" value={updateData.name} onChange={handleInputChange} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px", color : "orange" }}>Username:</label>
            <input type="text" name="username" value={updateData.username} onChange={handleInputChange} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px", color : "orange" }}>Email:</label>
            <input type="email" name="email" value={updateData.email} onChange={handleInputChange} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px", color : "orange" }}>City:</label>
            <input type="text" name="city" value={updateData.city} onChange={handleInputChange} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>
        <button type="submit" style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px 20px", borderRadius: "4px", border: "none", cursor: "pointer" }}>Update</button>
    </form>
</div>
  );
};

export default UpdateEmployee;