import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import useLocalStorageTasks from '../hooks/useLocalStorageTasks'; // import the custom hook

/** TaskManager Component */
const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Task Manager</h2>

      {/* Input & Add Button */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </form>

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-4">
        {['all', 'active', 'completed'].map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">
            No tasks found
          </p>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className={task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}>
                    {task.text}
                  </span>
                </div>
                <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Task stats */}
      <div className="mt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        {tasks.filter((t) => !t.completed).length} task{tasks.length !== 1 ? 's' : ''} remaining
      </div>
    </div>
  );
};

export default TaskManager;
