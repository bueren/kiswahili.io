import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/admindashboard";
import StudentDashboard from "./components/studentdashboard";
import MwalimuChat from "./components/mwalimuchat";
import QuizEngine from "./components/quizeengine";
import Lessons from "./components/lessons";
import GameZone from "./components/gamezone";
import Auth from "./components/auth";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/chat" element={<MwalimuChat />} />
        <Route path="/quiz" element={<QuizEngine />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/games" element={<GameZone />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
