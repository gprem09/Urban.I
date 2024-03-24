import React from "react";
import { Chat } from "./components/chat";
import { Landing } from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Flex, Text, Button } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { ChatWidget } from "./components/ChatWidget";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Flex // Ensure the container spans the entire viewport height
        justifyContent="center" // Center the child elements horizontally
        alignItems="center" // Center the child elements vertically
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Navbar />
        <ChatWidget />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
