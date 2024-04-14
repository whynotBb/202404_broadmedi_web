import React from "react";
import "./Profile.style.css";

const Profile = ({ profileImg, nationImg, type }) => {
    return (
        <div className={`profile ${type}`}>
            <div className="user">
                <img src={profileImg} alt="" />
            </div>
            <div className="nation">
                <img src={nationImg} alt="" />
            </div>
        </div>
    );
};

export default Profile;
