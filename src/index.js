import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Board from "./components/Board";
import Leaderboard from "./components/Leaderboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/game" element={<Board />} />
      <Route path="leaderboard/:board" element={<Leaderboard />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);
