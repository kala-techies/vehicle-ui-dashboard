import { Battery, BatteryCharging, BatteryWarning, Lightbulb } from 'lucide-react';

export interface StatusIndicatorsProps {
  batteryLevel: number; // 0-100
  headlightsOn: boolean;
}

export function StatusIndicators({ batteryLevel, headlightsOn }: StatusIndicatorsProps) {
  // Determine battery icon based on level
  const getBatteryIcon = () => {
    if (batteryLevel < 20) {
      return <BatteryWarning className="w-6 h-6 text-red-500" />;
    } else if (batteryLevel < 50) {
      return <Battery className="w-6 h-6 text-yellow-500" />;
    } else {
      return <BatteryCharging className="w-6 h-6 text-green-500" />;
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Status Indicators</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Battery status */}
        <div className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {getBatteryIcon()}
          <div className="mt-2 text-center">
            <div className="text-sm font-medium dark:text-white">Battery</div>
            <div className={`text-xs font-bold ${
              batteryLevel < 20 ? 'text-red-500' : 
              batteryLevel < 50 ? 'text-yellow-500' : 
              'text-green-500'
            }`}>
              {batteryLevel}%
            </div>
          </div>
        </div>
        
        {/* Headlights status */}
        <div className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <Lightbulb className={`w-6 h-6 ${headlightsOn ? 'text-yellow-400' : 'text-gray-400 dark:text-gray-600'}`} />
          <div className="mt-2 text-center">
            <div className="text-sm font-medium dark:text-white">Headlights</div>
            <div className="text-xs font-bold dark:text-gray-300">
              {headlightsOn ? 'ON' : 'OFF'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusIndicators;