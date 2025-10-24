import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode);
      if (newMode) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      return newMode;
    });
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          <Link to="/">PLP Task Manager</Link>
        </h1>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-900 dark:text-gray-100 hover:text-gray-500">
            Home
          </Link>
          <Link to="/tasks" className="text-gray-900 dark:text-gray-100 hover:text-gray-500">
            Tasks
          </Link>

          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
