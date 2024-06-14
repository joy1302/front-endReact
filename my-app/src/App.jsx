// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import DataTable from "./components/DataTable/DataTable";
import Chat from "./components/Chat/Chat";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import Home from "./pages/Home";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<DataTable />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<ProfilePicture />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
