import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Front-End Journey</h1>
      <p className="text-lg mb-6 max-w-xl">
        This React + Tailwind project is my step into mastering modern front-end development.
      </p>
      <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
        Get Started
      </button>
      <footer className="absolute bottom-4 text-sm opacity-75">
        © 2025 Assani Ndaka — Powered by React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
