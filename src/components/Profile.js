import React from 'react';

const Profile = ({user}) => {

    return (
    <div id="profile">
        <h1>
            Profile
        </h1>
        <br></br>
        <h3>{user?.username ? `User: ${user?.username}` : 'You are currently not logged in'}</h3>
    </div>
    );
    };




export default Profile;