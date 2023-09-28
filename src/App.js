import "./styles.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Biography from "./components/Biography";
import LifeEvents from "./components/LifeEvents";
import Poem from "./components/Poem";
import Memorial from "./components/Memorial";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/bio" element={<Biography />} />
        <Route path="/life" element={<LifeEvents />} />
        <Route path="/poem" element={<Poem />} />
        <Route path="/memorial" element={<Memorial />} />
      </Routes>
      <Footer />
    </div>
  );
}
