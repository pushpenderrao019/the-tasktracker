
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getFromStorage } from "./utils/localStorage";
import "./styles/index.css";
import { useState, useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUsername = getFromStorage("username");
    setUsername(storedUsername);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-gray-600 dark:text-gray-300">Loading...</div>
    </div>;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={username ? <Navigate to="/dashboard" replace /> : <Login onLogin={setUsername} />} 
            />
            <Route 
              path="/dashboard" 
              element={username ? <Dashboard username={username} onLogout={() => setUsername(null)} /> : <Navigate to="/" replace />} 
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
