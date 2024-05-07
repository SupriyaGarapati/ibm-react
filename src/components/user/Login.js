import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log(loginData);
        UserService.loginUser(loginData)
            .then((response) => {
                console.log(response);
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/profile');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    return (
        <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4" style={{color : "red"}}>LOGIN DATA</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group" style={{color : "green", fontFamily: "sans-serif"}}>
                            <label htmlFor="username">USERNAME</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={loginData.username}
                                onChange={handleChange}
                                autoFocus
                                required
                            />
                        </div>
                        <div className="form-group" style={{color : "green", fontFamily: "sans-serif"}}>
                            <label htmlFor="password">PASSWORD</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" >Login</button>
                        </div>
                    </form>
                    <p className="text-center" style={{color : "red", fontFamily: "sans-serif"}}>Not yet registered? <Link to={'/register'}>Register</Link></p>
                </div>
            </div>
            {afterSubmit && <p className="lead text-center mt-3">{afterSubmit}</p>}
        </div>
    </div>
</div>
    );
};
export default Login;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import UserService from "../../services/UserService";
// import { useDispatch } from "react-redux";
// import { userLogin } from "../../redux/UserSlice";

// const Login = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });
//     const [afterSubmit, setAfterSubmit] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     const handleLoginSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(loginData);
//         UserService.loginUser(loginData)
//             .then((response) => {
//                 console.log(response);
//                 setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
//                 setTimeout(() => {
//                     setLoginData({ username: '', password: '' });
//                     dispatch(userLogin(response));
//                     navigate('/profile');
//                 }, 2000);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoginData({ username: '', password: '' });
//                 setAfterSubmit(`Invalid credentials!`);
//             });
//     };

//     return (
//         <>
//             <h1 style={{ color: 'blue' }}>Login Component</h1>
//             <p>Login here</p>
//             <form onSubmit={handleLoginSubmit}>
//                 <input type="text" name="username" value={loginData.username}
//                     onChange={handleChange} autoFocus required />
//                 <br />
//                 <input type="password" name="password" value={loginData.password}
//                     onChange={handleChange} required />
//                 <br />
//                 <input type="submit" value="Login" />
//             </form>
//             {afterSubmit && <p>{afterSubmit}</p>}
//             <p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
//         </>
//     );
// };
// export default Login;