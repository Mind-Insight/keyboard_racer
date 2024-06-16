import { useState } from "react"

import getInfo from "../info/GetUserInfo"
import "../../assets/style.css"


export default function ProfilePage() {
    const [profileData, setProfileData] = useState("");

    const fetchProfileData = async (identifier) => {
        const response = await fetch(`http://127.0.0.1:8000/api/profile/${identifier}/`, {
            method: "GET"
        });
        const profileData = await response.json();
        setProfileData(profileData);
    };
    const userData = JSON.parse(localStorage.getItem("user_data"));
    fetchProfileData(userData.identifier);
    return (
        <>
            <h1 className="profile-title">PROFILE</h1>
            <div className="user-info-container">
                <h1>Total races: {profileData.races}</h1>
                <h1>Average speed: {profileData.avg_speed}</h1>
            </div>
        </>
    )
}