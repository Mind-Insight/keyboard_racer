import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import sendInfo from "./components/info/PostUserInfo"
import ProfilePage from './components/profile/ProfilePage.jsx'
import EnterPage from "./components/enter/EnterPage.jsx"
import MainPage from "./components/main/MainPage.jsx"
import './App.css'

function App() {
  sendInfo();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="" element={<EnterPage></EnterPage>}></Route>
        <Route path="main" element={<MainPage></MainPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
