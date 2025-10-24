import React, { useState, useEffect } from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';
import Loader from '../components/Loader'; // Import the Loader
import { fetchPosts } from '../api/fetchData';

const Home = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Counter Section */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-2">Counter</h2>
        <div className="flex items-center gap-4 my-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -
          </button>
          <span className="text-xl font-bold">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Task Manager */}
      <TaskManager />

      {/* API Data Section */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold mb-4">API Data</h2>
        {loading ? (
          <Loader /> // Show spinner while loading
        ) : posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No data found.</p>
        ) : (
          posts.map((post) => (
            <Card key={post.id}>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
            </Card>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
