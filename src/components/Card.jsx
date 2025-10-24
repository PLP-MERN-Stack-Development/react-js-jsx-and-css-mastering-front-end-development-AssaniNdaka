const Card = ({ title, content }) => {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-md transition-shadow">
      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default Card;
