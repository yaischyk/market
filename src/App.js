import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
// Routes
import Main from "./routes/Main";
import Task from "./routes/Task";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            <Route path="/logs/:key" element={<Main/>} />
            <Route path="/logs/l/:id" element={<Task/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
