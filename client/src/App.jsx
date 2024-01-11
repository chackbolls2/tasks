import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import { TaskProvider } from "./context/tasksContext";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <main className="container content-container mx-auto px-10 md:px-0">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/add-task" element={<TaskFormPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
