import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/fetchData';

const ApiData = () => {
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
    <div className="max-w-3xl mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">API Data</h2>
      {loading ? (
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No data found.</p>
      ) : (
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id} className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-gray-100">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiData;
