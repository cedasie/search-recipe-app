import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Sidebar from "./components/Sidebar";
import FavoritesPages from "./components/pages/FavoritesPages";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPages />} />
      </Routes>
    </div>
  );
}

export default App;
