import React from "react";
import { Chat } from "./components/chat";
import { Landing } from "./components/Landing";
import { Explore } from "./components/Explore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stack, Text, Button } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProjectPage } from "./components/ProjectPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Stack // Ensure the container spans the entire viewport height
        justifyContent="center" // Center the child elements horizontally
        alignItems="center" // Center the child elements vertically
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
        <Navbar />
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;
