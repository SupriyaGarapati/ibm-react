// UpdateProfile.js 

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateProfile } from "../../redux/UserSlice";
import UserService from "../../services/UserService";

const UpdateProfile = () => {
    console.log('UpdateProfile');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector(store => store.user.jwtToken);
    console.log(userData);
    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        console.log(evt.target);
        console.log(formData);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        console.log(formData);
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            console.log(user);
            dispatch(userUpdateProfile(user));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST')
                alert(error.message);
        }
    };

    return (
        <>
                <div style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '20px auto'
        }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Update Your Profile</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label style={{ marginBottom: '10px' }}>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} autoFocus required style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <label style={{ marginBottom: '10px' }}>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <label style={{ marginBottom: '10px' }}>Phone:</label>
                <input type="number" name="phone" value={formData.phone} onChange={handleChange} required style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <label style={{ marginBottom: '10px' }}>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <label style={{ marginBottom: '10px' }}>Avatar:</label>
                <input type="text" name="avatar" value={formData.avatar} onChange={handleChange} style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Update Your Profile</button>
            </form>
        </div>

        </>
    );
};

export default UpdateProfile;
