import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import View from "./pages/View";

function App() {
  return (
    <div className="App max-w-4xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="login" element={<Login />} />
        <Route path="/:link" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
