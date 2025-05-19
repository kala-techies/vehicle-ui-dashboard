import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Settings } from 'lucide-react';

export interface SettingsPanelProps {}

export function SettingsPanel(props: SettingsPanelProps) {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold dark:text-white">Settings</h2>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Settings className="w-5 h-5 dark:text-white" />
        </button>
      </div>
      
      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="space-y-4 py-2">
          {/* Theme toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {theme === 'light' ? (
                <Sun className="w-5 h-5 mr-2 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 mr-2 text-blue-400" />
              )}
              <span className="text-sm dark:text-white">Display Mode</span>
            </div>
            
            <button 
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
          
          {/* Other settings would go here */}
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-white">Units</span>
            <select className="text-sm bg-gray-100 dark:bg-gray-700 dark:text-white rounded px-2 py-1">
              <option>Metric (km/h)</option>
              <option>Imperial (mph)</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-white">Display Brightness</span>
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="80"
              className="w-24 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
      </div>
      
      {!isExpanded && (
        <div className="flex justify-center items-center p-2">
          <button 
            onClick={() => setIsExpanded(true)}
            className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400"
          >
            Tap to expand settings
          </button>
        </div>
      )}
    </div>
  );
}

export default SettingsPanel;