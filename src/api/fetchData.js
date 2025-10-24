export const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
