import { Battery, BatteryCharging, BatteryWarning, Lightbulb, Zap, Sun } from 'lucide-react';

export interface StatusIndicatorsProps {
  batteryLevel: number;
  headlightsOn: boolean;
}

export function StatusIndicators({ batteryLevel, headlightsOn }: StatusIndicatorsProps) {
  const getBatteryIcon = () => {
    if (batteryLevel < 20) {
      return <BatteryWarning className="w-8 h-8 text-red-400 animate-pulse" />;
    } else if (batteryLevel < 50) {
      return <Battery className="w-8 h-8 text-yellow-400" />;
    } else {
      return <BatteryCharging className="w-8 h-8 text-green-400" />;
    }
  };

  const getBatteryColor = () => {
    if (batteryLevel < 20) return 'from-red-500 to-red-600';
    if (batteryLevel < 50) return 'from-yellow-500 to-orange-500';
    return 'from-green-500 to-emerald-500';
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent text-center flex items-center justify-center">
        <Zap className="w-6 h-6 mr-2" />
        System Status
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {/* Battery Status */}
        <div className={`flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
          <div className="relative">
            {getBatteryIcon()}
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r ${getBatteryColor()} animate-pulse`}></div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-bold text-white mb-1">Battery Level</div>
            <div className="relative w-24 h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${getBatteryColor()} transition-all duration-500 rounded-full`}
                style={{ width: `${batteryLevel}%` }}
              ></div>
            </div>
            <div className={`text-xl font-mono font-bold mt-2 ${
              batteryLevel < 20 ? 'text-red-300' :
              batteryLevel < 50 ? 'text-yellow-300' :
              'text-green-300'
            }`}>
              {batteryLevel}%
            </div>
          </div>
        </div>

        {/* Headlights Status */}
        <div className={`flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
          <div className="relative">
            <Lightbulb className={`w-8 h-8 ${headlightsOn ? 'text-yellow-300 animate-pulse' : 'text-gray-400'}`} />
            {headlightsOn && (
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-ping"></div>
            )}
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-bold text-white mb-1">Headlights</div>
            <div className={`text-xl font-bold ${headlightsOn ? 'text-yellow-300' : 'text-gray-400'}`}>
              {headlightsOn ? 'ON' : 'OFF'}
            </div>
            {headlightsOn && (
              <div className="mt-2 flex items-center justify-center">
                <Sun className="w-4 h-4 text-yellow-300 mr-1" />
                <span className="text-xs text-yellow-200">Active</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}