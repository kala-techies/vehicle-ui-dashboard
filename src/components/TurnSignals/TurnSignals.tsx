import { ChevronLeft, ChevronRight, Car } from 'lucide-react';

export interface TurnSignalsProps {
  active: 'left' | 'right' | 'none';
}

export function TurnSignals({ active }: TurnSignalsProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-center flex items-center justify-center">
        <Car className="w-6 h-6 mr-2" />
        Turn Signals
      </h2>

      <div className="flex items-center justify-center space-x-8">
        <div className={`p-4 rounded-2xl transition-all duration-300 ${
          active === 'left'
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl animate-pulse ring-4 ring-yellow-300/50'
            : 'bg-white/10 backdrop-blur-sm border border-white/20'
        }`}>
          <ChevronLeft className="w-10 h-10 text-white" />
        </div>

        <div className="relative">
          <div className="w-20 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute w-16 h-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-t-lg top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* Animated light effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 ${
              active !== 'none' ? 'animate-shimmer' : ''
            }`}></div>
          </div>
        </div>

        <div className={`p-4 rounded-2xl transition-all duration-300 ${
          active === 'right'
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl animate-pulse ring-4 ring-yellow-300/50'
            : 'bg-white/10 backdrop-blur-sm border border-white/20'
        }`}>
          <ChevronRight className="w-10 h-10 text-white" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <span className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
          active === 'none'
            ? 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
            : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 animate-pulse'
        }`}>
          {active === 'none' ? '🔄 No signal active' : `🟡 ${active.charAt(0).toUpperCase() + active.slice(1)} turn signal active`}
        </span>
      </div>
    </div>
  );
}