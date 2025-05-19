import { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ThemeContext, Theme } from './context/ThemeContext';

export function App() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen p-4`}>
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;