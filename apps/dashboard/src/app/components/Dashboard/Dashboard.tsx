import { Speedometer } from '../Speedometer/Speedometer';
import { FuelGauge } from '../FuelGauge/FuelGauge';
import { TurnSignals } from '../TurnSignals/TurnSignals';
import { ClimateControl } from '../ClimateControl/ClimateControl';
import { MediaControls } from '../MediaControls/MediaControls';
import { StatusIndicators } from '../StatusIndicators/StatusIndicators';
import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { WarningPanel } from '../WarningPanel/WarningPanel';
import { useState } from 'react';

export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const [speed, setSpeed] = useState(0);
  const [fuelLevel, setFuelLevel] = useState(75);
  const [turnSignal, setTurnSignal] = useState<'left' | 'right' | 'none'>('none');
  const [batteryLevel, setBatteryLevel] = useState(90);
  const [headlightsOn, setHeadlightsOn] = useState(false);
  const [warnings, setWarnings] = useState<string[]>([]);

  // Simulate speed changes
  const simulateSpeedChange = () => {
    setSpeed(Math.floor(Math.random() * 120));
  };

  // Simulate turn signals
  const simulateTurnSignal = () => {
    const signals = ['left', 'right', 'none'] as const;
    setTurnSignal(signals[Math.floor(Math.random() * signals.length)]);
  };

  // Simulate warnings
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
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-white text-center">Vehicle Dashboard</h1>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <Speedometer speed={speed} maxSpeed={160} />
            <div className="mt-2">
              <button 
                onClick={simulateSpeedChange}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Simulate Speed Change
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <FuelGauge level={fuelLevel} />
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <TurnSignals active={turnSignal} />
            <div className="mt-2">
              <button 
                onClick={simulateTurnSignal}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Toggle Turn Signal
              </button>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <ClimateControl />
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <MediaControls />
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <StatusIndicators batteryLevel={batteryLevel} headlightsOn={headlightsOn} />
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <SettingsPanel />
          </div>
          
          <div className="md:col-span-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <WarningPanel warnings={warnings} />
            <div className="mt-2">
              <button 
                onClick={simulateWarning}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
              >
                Simulate Warning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;