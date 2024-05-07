import axios from "axios";
import { useState } from "react";

const AddEmployee = ({ fetchEmployees }) => {
    const [newEmployee, setNewEmployee] = useState({
      
      firstname: "",
      lastname: "",
      email: "",
      salary: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewEmployee((prev) => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8080/emp/add-emp", newEmployee)
        .then(() => {
          alert("Employee added successfully!");
          fetchEmployees();
          setNewEmployee({
            firstname : " ",
            lastname : " ",
            email : " ",
            salary : " "
          });
        })
        .catch((error) => {
          console.error("Error adding employee:", error);
        });
    };
  
    return (
        <div className="form-container" style={{ maxWidth: "400px", margin: "auto", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
    <h2 style={{ textAlign: "center", marginBottom: "20px", color: "red" }}>Add Employee</h2>
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "10px", color: "green" }}>
            First Name:
            <input
                type="text"
                name="firstname"
                value={newEmployee.firstname}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
            />
        </label>

        <label style={{ marginBottom: "10px", color: "green" }}>
            Last Name:
            <input
                type="text"
                name="lastname"
                value={newEmployee.lastname}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
            />
        </label>

        <label style={{ marginBottom: "10px", color: "green" }}>
            Email:
            <input
                type="email"
                name="email"
                value={newEmployee.email}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
            />
        </label>

        <label style={{ marginBottom: "10px", color: "green" }}>
            Salary:
            <input
                type="number"
                name="salary"
                value={newEmployee.salary}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", outline: "none" }}
            />
        </label>

        <button type="submit" style={{ backgroundColor: "orange", color: "#fff", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>Add Employee</button>
    </form>
</div>
    );
  };
  
  export default AddEmployee;


// import axios from "axios";
// import { useState } from "react";

// const AddEmployee = () => {

//     const backendUrl = 'https://jsonplaceholder.typicode.com/users';
//     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });

//     const handleChange = (evt) => {
//         console.log(evt.target);
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(empData);
//         axios.post(backendUrl, empData)
//             .then((resp) => {
//                 console.log(resp.data);
//                 alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
//                 setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
//             });
//     };

//     return (
//         <>
//             <h1>Add Employee Component</h1>
//             <form onSubmit={handleSubmit} >
//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//                 <br />
//                 <label htmlFor="aadhaar">Aadhaar:</label>
//                 <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//                 <br />
//                 <label htmlFor="salary">Salary:</label>
//                 <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//                 <br />
//                 <input type="submit" value="Add Employee" />
//             </form>
//         </>
//     );
// };

// export default AddEmployee;






