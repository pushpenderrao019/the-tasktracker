
import React from "react";
import { motion } from "framer-motion";

interface TaskFilterProps {
  currentFilter: "all" | "completed" | "pending";
  onFilterChange: (filter: "all" | "completed" | "pending") => void;
  taskCounts: {
    all: number;
    completed: number;
    pending: number;
  };
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: "all" as const, label: "All", count: taskCounts.all },
    { key: "pending" as const, label: "Pending", count: taskCounts.pending },
    { key: "completed" as const, label: "Completed", count: taskCounts.completed },
  ];

  return (
    <div className="space-y-2">
      {filters.map(({ key, label, count }) => (
        <motion.button
          key={key}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onFilterChange(key)}
          className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-left flex justify-between items-center ${
            currentFilter === key              
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
            : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          }`}
        >
          <span>{label}</span>
          <span className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full">
            {count}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default TaskFilter;
