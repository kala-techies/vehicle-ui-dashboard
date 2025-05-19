import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface TurnSignalsProps {
  active: 'left' | 'right' | 'none';
}

export function TurnSignals({ active }: TurnSignalsProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Turn Signals</h2>
      
      <div className="flex items-center justify-center space-x-8">
        {/* Left turn signal */}
        <div className={`p-3 rounded-full ${active === 'left' ? 'bg-green-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-700'}`}>
          <ChevronLeft className="w-8 h-8 text-white" />
        </div>
        
        {/* Car icon (simplified) */}
        <div className="w-16 h-10 bg-blue-500 dark:bg-blue-600 rounded-md relative">
          <div className="absolute w-12 h-6 bg-blue-600 dark:bg-blue-700 rounded-t-md top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        {/* Right turn signal */}
        <div className={`p-3 rounded-full ${active === 'right' ? 'bg-green-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-700'}`}>
          <ChevronRight className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm dark:text-gray-300">
        {active === 'none' ? 'No signal active' : `${active.charAt(0).toUpperCase() + active.slice(1)} turn signal active`}
      </div>
    </div>
  );
}

export default TurnSignals;