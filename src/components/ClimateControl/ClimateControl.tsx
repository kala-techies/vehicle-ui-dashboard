import { useState } from 'react';
import { Thermometer, Fan, Snowflake, Flame } from 'lucide-react';

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
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Climate Control</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <Thermometer className="w-5 h-5 mr-2 dark:text-white" />
            <span className="text-sm font-medium dark:text-white">Temperature</span>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={decreaseTemp}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-l-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              -
            </button>
            
            <div className="w-16 h-8 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-lg font-bold dark:text-white">{temperature}°C</span>
            </div>
            
            <button 
              onClick={increaseTemp}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-r-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <Fan className="w-5 h-5 mr-2 dark:text-white" />
            <span className="text-sm font-medium dark:text-white">Fan Speed</span>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={decreaseFan}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-l-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              -
            </button>
            
            <div className="w-16 h-8 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i}
                    className={`w-1.5 h-5 rounded-sm ${i < fanSpeed ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  ></div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={increaseFan}
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-r-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              +
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center mb-2 justify-center">
          <span className="text-sm font-medium dark:text-white">Mode</span>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setMode('off')}
            className={`p-3 rounded-md flex flex-col items-center ${mode === 'off' ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-800'}`}
          >
            <span className="text-xl">⭘</span>
            <span className="text-xs mt-1 dark:text-white">Off</span>
          </button>
          
          <button 
            onClick={() => setMode('cool')}
            className={`p-3 rounded-md flex flex-col items-center ${mode === 'cool' ? 'bg-blue-200 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-800'}`}
          >
            <Snowflake className="w-6 h-6 text-blue-500" />
            <span className="text-xs mt-1 dark:text-white">A/C</span>
          </button>
          
          <button 
            onClick={() => setMode('heat')}
            className={`p-3 rounded-md flex flex-col items-center ${mode === 'heat' ? 'bg-red-200 dark:bg-red-800' : 'bg-gray-100 dark:bg-gray-800'}`}
          >
            <Flame className="w-6 h-6 text-red-500" />
            <span className="text-xs mt-1 dark:text-white">Heat</span>
          </button>
        </div>
      </div>
    </div>
  );
}