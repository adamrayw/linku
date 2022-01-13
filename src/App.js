import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Context } from "./context/context";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import View from "./pages/View";

function App() {
  const [context, setContext] = useState([]);

  return (
    <div className="App max-w-4xl mx-auto">
      <Context.Provider value={[context, setContext]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="login" element={<Login />} />
          <Route path="/:link" element={<View />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
