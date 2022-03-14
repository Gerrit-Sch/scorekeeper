import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import HistoryPage from "./pages/HistoryPage";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div>
      <h1>Scorekeeper</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Navigation />
    </div>
  );
}
