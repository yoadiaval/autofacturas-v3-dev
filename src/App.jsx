import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProtectedRoute from "./Pages/ProtectedRoute";

import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
