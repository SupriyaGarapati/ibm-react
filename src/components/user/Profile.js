import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        <>
           <div style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <h1 style={{color : "purple", fontFamily : "serif", fontSize : "50px"}}>User Profile</h1>
            {userData && (
                <div style={{ marginTop: '20px' }}>
                    <p style={{ marginBottom: '10px', color : "olivedrab", fontSize : "25px" }}>Username: {userData.username}</p>
                    <p style={{ marginBottom: '10px',color : "olivedrab", fontSize : "25px" }}>First Name: {userData.firstName}</p>
                    <p style={{ marginBottom: '10px' ,color : "olivedrab", fontSize : "25px"}}>Last Name: {userData.lastName}</p>
                    <p style={{ marginBottom: '10px', color : "olivedrab", fontSize : "25px"}}>Phone: {userData.phone}</p>
                    <p style={{ marginBottom: '10px', color : "olivedrab", fontSize : "25px" }}>Email: {userData.email}</p>
                    {userData.avatar && <img style={{ width: '300px', borderRadius: '50%', marginTop: '20px' }} src={userData.avatar} alt="Avatar" />}
                </div>
            )}
            <UpdateProfile />
        </div>
            
            <UpdateProfile />
        </>
    );
};

export default Profile;
