"use client";

import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { BrowserRouter as Router } from "react-router-dom";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  return (
    <main
      className={`min-h-screen pt-[4.75rem] lg:pt-[5.25rem] ${
        theme === "dark" ? "bg-c-1 text-c-4" : "bg-c-4 text-c-1"
      } `}
    >
      <Router>
        <Navbar theme={theme} setTheme={setTheme}></Navbar>
      </Router>

      <Profile theme={theme}></Profile>
      <About></About>
    </main>
  );
}
