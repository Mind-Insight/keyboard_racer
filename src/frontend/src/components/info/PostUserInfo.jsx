import { useEffect } from 'react';
import axios from "axios";

export default function sendInfo() {
    useEffect(() => {
        const sendInfoDone = localStorage.getItem("send_info_done");

        if (!sendInfoDone) {
            const userData = JSON.parse(localStorage.getItem("user_data"));

            if (!userData) {
                const newUser = { identifier: uuidv4() };
                localStorage.setItem("user_data", JSON.stringify(newUser));
                console.log("hello");

                sendUserData(newUser);
            } else {
                sendUserData(userData);
            }
            localStorage.setItem("send_info_done", "true");
        }
    }, []);

    const sendUserData = async (data) => {
        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/info/",
            data: {
                identifier: data["identifier"],
                textDone: false,
            }
        })
    };

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}