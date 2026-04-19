import { useState } from 'react';
import { Thermometer, Fan, Snowflake, Flame, Minus, Plus } from 'lucide-react';

export function ClimateControl() {
  const [temperature, setTemperature] = useState(22);
  const [fanSpeed, setFanSpeed] = useState(2);
  const [mode, setMode] = useState<'off' | 'cool' | 'heat'>('off');

  const increaseTemp = () => {
    if (temperature < 30) {
      setTemperature(temperature + 1);
    }
  };

  const decreaseTemp = () => {
    if (temperature > 16) {
      setTemperature(temperature - 1);
    }
  };

  const increaseFan = () => {
    if (fanSpeed < 5) {
      setFanSpeed(fanSpeed + 1);
    }
  };

  const decreaseFan = () => {
    if (fanSpeed > 0) {
      setFanSpeed(fanSpeed - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
        ❄️ Climate Control
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Temperature Control */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <Thermometer className="w-6 h-6 mr-3 text-cyan-400" />
            <span className="text-lg font-semibold">Temperature</span>
          </div>

          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <button
              onClick={decreaseTemp}
              className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-all duration-200 hover:scale-110 hover:shadow-lg"
            >
              <Minus className="w-5 h-5" />
            </button>

            <div className="w-20 h-12 flex items-center justify-center mx-2">
              <span className="text-2xl font-mono font-bold text-white">{temperature}°C</span>
            </div>

            <button
              onClick={increaseTemp}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-all duration-200 hover:scale-110 hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Fan Speed Control */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <Fan className={`w-6 h-6 mr-3 transition-all duration-1000 ${fanSpeed > 0 ? 'animate-spin' : ''}`} style={{ animationDuration: `${2 / (fanSpeed || 1)}s` }} />
            <span className="text-lg font-semibold">Fan Speed</span>
          </div>

          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <button
              onClick={decreaseFan}
              className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-all duration-200 hover:scale-110 hover:shadow-lg"
            >
              <Minus className="w-5 h-5" />
            </button>

            <div className="w-20 h-12 flex items-center justify-center mx-2">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-6 rounded-full transition-all duration-300 ${
                      i < fanSpeed
                        ? 'bg-gradient-to-t from-blue-400 to-cyan-400 shadow-lg animate-pulse'
                        : 'bg-white/30'
                    }`}
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      boxShadow: i < fanSpeed ? '0 0 8px rgba(59, 130, 246, 0.6)' : 'none'
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <button
              onClick={increaseFan}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-all duration-200 hover:scale-110 hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mode Selection */}
      <div className="mt-8">
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg font-semibold">Climate Mode</span>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setMode('off')}
            className={`p-4 rounded-2xl flex flex-col items-center transition-all duration-300 hover:scale-105 ${
              mode === 'off'
                ? 'bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg ring-2 ring-white/50'
                : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
            }`}
          >
            <span className="text-2xl">⭘</span>
            <span className="text-sm mt-2 font-medium">Off</span>
          </button>

          <button
            onClick={() => setMode('cool')}
            className={`p-4 rounded-2xl flex flex-col items-center transition-all duration-300 hover:scale-105 ${
              mode === 'cool'
                ? 'bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg ring-2 ring-blue-300 animate-pulse'
                : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
            }`}
          >
            <Snowflake className="w-8 h-8 text-blue-300" />
            <span className="text-sm mt-2 font-medium">A/C</span>
          </button>

          <button
            onClick={() => setMode('heat')}
            className={`p-4 rounded-2xl flex flex-col items-center transition-all duration-300 hover:scale-105 ${
              mode === 'heat'
                ? 'bg-gradient-to-br from-red-400 to-orange-500 shadow-lg ring-2 ring-red-300 animate-pulse'
                : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
            }`}
          >
            <Flame className="w-8 h-8 text-red-300" />
            <span className="text-sm mt-2 font-medium">Heat</span>
          </button>
        </div>
      </div>
    </div>
  );
}