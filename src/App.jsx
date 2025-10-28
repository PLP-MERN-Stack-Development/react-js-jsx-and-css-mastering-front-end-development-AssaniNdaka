import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Front-End Project 🚀</h1>
      <p className="text-lg mb-6 max-w-2xl">
        This React + Tailwind app is a demonstration of modern front-end development.
        It’s now deployed live on Vercel!
      </p>
      <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
        Explore More
      </button>
      <footer className="absolute bottom-4 text-sm opacity-80">
        © 2025 Assani Ndaka | Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
