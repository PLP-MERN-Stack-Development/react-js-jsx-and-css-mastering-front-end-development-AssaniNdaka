export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-blue-600">MyReactSite</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Projects</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to My Front-End Journey
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Building beautiful, responsive websites with React, Vite, and Tailwind CSS —
          deployed live with Vercel 🚀
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </header>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} MyReactSite. All rights reserved.
      </footer>
    </div>
  );
}
