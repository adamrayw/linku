import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import { Context, IndexBorder, Tema } from "./context/context";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import View from "./pages/View";

function App() {
  const [context, setContext] = useState([]);
  const [tema, setTema] = useState("bg-gray-200");
  const [index, setIndex] = useState();

  return (
    <div className="App max-w-4xl mx-auto">
      <IndexBorder.Provider value={[index, setIndex]}>
        <Tema.Provider value={[tema, setTema]}>
          <Context.Provider value={[context, setContext]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="login" element={<Login />} />
              <Route path="/:link" element={<View />} />
            </Routes>
          </Context.Provider>
        </Tema.Provider>
      </IndexBorder.Provider>
    </div>
  );
}

export default App;
