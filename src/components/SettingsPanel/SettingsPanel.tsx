import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Settings, Palette, Gauge } from 'lucide-react';

export function SettingsPanel() {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [brightness, setBrightness] = useState(80);
  const [units, setUnits] = useState('metric');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent flex items-center">
          <Settings className="w-6 h-6 mr-2" />
          Settings
        </h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${
            isExpanded
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
              : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
          }`}
        >
          <Settings className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>

      <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-6 py-4">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-center">
              {theme === 'light' ? (
                <Sun className="w-6 h-6 mr-3 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 mr-3 text-blue-400" />
              )}
              <div>
                <span className="text-lg font-semibold text-white">Display Mode</span>
                <div className="text-sm text-white/70">{theme === 'dark' ? 'Dark Theme' : 'Light Theme'}</div>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 focus:outline-none ${
                theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-yellow-400 to-orange-500'
              } shadow-lg`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                  theme === 'dark' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Units Selection */}
          <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-center">
              <Gauge className="w-6 h-6 mr-3 text-green-400" />
              <div>
                <span className="text-lg font-semibold text-white">Units</span>
                <div className="text-sm text-white/70">Measurement system</div>
              </div>
            </div>

            <select
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="metric">Metric (km/h)</option>
              <option value="imperial">Imperial (mph)</option>
            </select>
          </div>

          {/* Brightness Control */}
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Sun className="w-6 h-6 mr-3 text-orange-400" />
                <div>
                  <span className="text-lg font-semibold text-white">Display Brightness</span>
                  <div className="text-sm text-white/70">{brightness}%</div>
                </div>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(parseInt(e.target.value))}
              className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${brightness}%, rgba(255,255,255,0.2) ${brightness}%, rgba(255,255,255,0.2) 100%)`
              }}
            />
          </div>
        </div>
      </div>

      {!isExpanded && (
        <div className="flex justify-center items-center p-4">
          <button
            onClick={() => setIsExpanded(true)}
            className="text-sm text-blue-300 hover:text-blue-200 transition-colors duration-200 flex items-center"
          >
            <Palette className="w-4 h-4 mr-2" />
            Tap to expand settings
          </button>
        </div>
      )}
    </div>
  );
}