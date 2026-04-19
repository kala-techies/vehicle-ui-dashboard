import { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ThemeContext, Theme } from './context/ThemeContext';

export function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app min-h-screen transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}>
      <div className="relative z-10 p-6">
        <Dashboard />
      </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App