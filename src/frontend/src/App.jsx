import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));

    if (!userData) {
      const newUser = { identifier: uuidv4() };
      localStorage.setItem("user_data", JSON.stringify(newUser));

      sendUserData(newUser);
    } else {
      sendUserData(userData);

    }
  }, []);

  const sendUserData = async (data) => {
    const response = await fetch("http://127.0.0.1:8000/api/info/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log(responseData);
  };

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
    <div>
      <h1>Value assigned to Local Storage</h1>
    </div>
  )
}

export default App
