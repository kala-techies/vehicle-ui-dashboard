import { useState } from 'react';
import { Speedometer } from '../Speedometer/Speedometer';
import { FuelGauge } from '../FuelGauge/FuelGauge';
import { TurnSignals } from '../TurnSignals/TurnSignals';
import { ClimateControl } from '../ClimateControl/ClimateControl';
import { MediaControls } from '../MediaControls/MediaControls';
import { StatusIndicators } from '../StatusIndicators/StatusIndicators';
import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { WarningPanel } from '../WarningPanel/WarningPanel';
import { useTheme } from '../../context/ThemeContext';

export function Dashboard() {
  const { theme } = useTheme();
  const [speed, setSpeed] = useState(0);
  const [fuelLevel] = useState(75);  // Removed setFuelLevel
  const [turnSignal, setTurnSignal] = useState<'left' | 'right' | 'none'>('none');
  const [batteryLevel] = useState(90);  // Removed setBatteryLevel
  const [headlightsOn] = useState(false);  // Removed setHeadlightsOn
  const [warnings, setWarnings] = useState<string[]>([]);

  const simulateSpeedChange = () => {
    setSpeed(Math.floor(Math.random() * 120));
  };

  const simulateTurnSignal = () => {
    const signals = ['left', 'right', 'none'] as const;
    setTurnSignal(signals[Math.floor(Math.random() * signals.length)]);
  };

  const simulateWarning = () => {
    const possibleWarnings = [
      'Check Engine',
      'Low Tire Pressure',
      'ABS Fault',
      'Low Fuel',
      'Oil Pressure',
    ];
    
    if (warnings.length < 3 && Math.random() > 0.5) {
      const newWarning = possibleWarnings[Math.floor(Math.random() * possibleWarnings.length)];
      if (!warnings.includes(newWarning)) {
        setWarnings([...warnings, newWarning]);
      }
    } else if (warnings.length > 0) {
      const filteredWarnings = [...warnings];
      filteredWarnings.pop();
      setWarnings(filteredWarnings);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-slow">
            🚗 Vehicle Control Center
          </h1>
          <p className="text-lg opacity-80 mt-2">Advanced Dashboard Interface</p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Gauges */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'glass-dark' : 'glass'
            }`}>
              <Speedometer speed={speed} maxSpeed={160} />
              <div className="mt-4 text-center">
                <button
                  onClick={simulateSpeedChange}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  🚀 Simulate Speed
                </button>
              </div>
            </div>

            <div className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'glass-dark' : 'glass'
            }`}>
              <FuelGauge level={fuelLevel} />
            </div>
          </div>

          {/* Center Panel - Main Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'glass-dark' : 'glass'
            }`}>
              <ClimateControl />
            </div>

            <div className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'glass-dark' : 'glass'
            }`}>
              <MediaControls />
            </div>
          </div>

          {/* Right Panel - Status and Controls */}
          <div className="lg:col-span-3 space-y-6">
            <div className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'glass-dark' : 'glass'
            }`}>
              <TurnSignals active={turnSignal} />
              <div className="mt-4 text-center">
                <button
                  onClick={simulateTurnSignal}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  🔄 Toggle Signals
                </button>
              </div>
            </div>

            <div className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'glass-dark' : 'glass'
            }`}>
              <StatusIndicators batteryLevel={batteryLevel} headlightsOn={headlightsOn} />
            </div>

            <div className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'glass-dark' : 'glass'
            }`}>
              <SettingsPanel />
            </div>
          </div>
        </div>

        {/* Bottom Panel - Warnings */}
        <div className={`p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
          theme === 'dark' ? 'glass-dark' : 'glass'
        }`}>
          <WarningPanel warnings={warnings} />
          <div className="mt-4 text-center">
            <button
              onClick={simulateWarning}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              ⚠️ Simulate Warning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
