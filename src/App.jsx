// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TaskManager from './components/TaskManager'; // Tasks page

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''} min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
