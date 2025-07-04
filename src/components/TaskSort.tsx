
import React from "react";
import { motion } from "framer-motion";

interface TaskSortProps {
  currentSort: "dueDate" | "priority" | "createdAt";
  onSortChange: (sort: "dueDate" | "priority" | "createdAt") => void;
}

const TaskSort: React.FC<TaskSortProps> = ({ currentSort, onSortChange }) => {
  const sortOptions = [
    { key: "createdAt" as const, label: "Created Date" },
    { key: "dueDate" as const, label: "Due Date" },
    { key: "priority" as const, label: "Priority" },
  ];

  return (
    <div className="space-y-2">
      {sortOptions.map(({ key, label }) => (
        <motion.button
          key={key}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSortChange(key)}
          className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
            currentSort === key
              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
              : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          }`}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
};

export default TaskSort;
