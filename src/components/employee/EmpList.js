import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const [empList, setEmpList] = useState('');

    useEffect(() => {
        console.log('useEffect');
        axios.get('http://localhost:8080/emp/get-all-emps')
            .then((resp) => {
                console.log(resp.data);
                setEmpList(resp.data);
            })
    }, []);

    return (
        <>
            <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
    <h1 style={{ textAlign: "center", marginBottom: "20px", color: "green" }}>Employee List</h1>
    <table style={{ width: "100%", borderCollapse: "collapse", borderRadius: "10px", overflow: "hidden", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <thead style={{ backgroundColor: "#007bff", color: "#fff" }}>
            <tr>
                <th style={{ padding: "10px" }}>Name</th>
                <th style={{ padding: "10px" }}>Salary</th>
                <th style={{ padding: "10px" }}>Email</th>
                <th style={{ padding: "10px" }}>Lastname</th>
            </tr>
        </thead>
        <tbody>
            {empList && empList.map(emp => (
                <tr key={emp.employeeId} style={{ backgroundColor: "#f9f9f9" }}>
                    <td style={{ padding: "10px" }}>{emp.firstname}</td>
                    <td style={{ padding: "10px" }}>{emp.salary}</td>
                    <td style={{ padding: "10px" }}>{emp.email}</td>
                    <td style={{ padding: "10px" }}>{emp.lastname}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
        </>
    );
};

export default EmpList;


// import axios from "axios";
// import { useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     const getEmpList = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp);
//                 setEmpList(resp.data);
//             })
//     };

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <p> {empList && empList.length} </p>
//             <button onClick={getEmpList}>Get Emp List</button>

//         </>
//     );
// };

// export default EmpList;
