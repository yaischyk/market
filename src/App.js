import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
// Routes
import Main from "./routes/Main";
import Task from "./routes/Task";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            <Route path="/:key" element={<Main/>} />
            <Route path="/logs/:id" element={<Task/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
