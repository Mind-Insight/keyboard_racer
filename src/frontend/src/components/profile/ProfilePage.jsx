import { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/style.css"


export default function ProfilePage() {
    const [profileData, setProfileData] = useState("");

    const userData = JSON.parse(localStorage.getItem("user_data"));
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/profile/${userData["identifier"]}/`,
        })
        .then((response) => {
            setProfileData(response.data);
        })
        .catch((error) => {
            console.log("Error while getting user data:", error);
        })
    }, []);

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