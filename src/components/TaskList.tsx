
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Task } from "../utils/localStorage";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onToggleComplete: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 text-center"
      >
        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <img 
            src="/assets/notasks.png" 
            alt="No tasks clipboard" 
            className="w-12 h-12 opacity-60 dark:opacity-40 filter dark:invert"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No tasks found</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Create your first task to get started with your productivity journey!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={() => onEditTask(task)}
            onDelete={() => onDeleteTask(task.id)}
            onToggleComplete={() => onToggleComplete(task.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
