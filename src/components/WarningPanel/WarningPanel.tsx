import { AlertTriangle, X, CheckCircle, AlertCircle, Zap } from 'lucide-react';

export interface WarningPanelProps {
  warnings: string[];
}

export function WarningPanel({ warnings }: WarningPanelProps) {
  const getWarningIcon = (warning: string) => {
    if (warning.toLowerCase().includes('engine') || warning.toLowerCase().includes('check')) {
      return <AlertCircle className="w-6 h-6 text-red-400" />;
    } else if (warning.toLowerCase().includes('tire') || warning.toLowerCase().includes('pressure')) {
      return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
    } else if (warning.toLowerCase().includes('abs') || warning.toLowerCase().includes('fault')) {
      return <Zap className="w-6 h-6 text-orange-400" />;
    } else if (warning.toLowerCase().includes('fuel') || warning.toLowerCase().includes('low')) {
      return <AlertTriangle className="w-6 h-6 text-red-400" />;
    } else if (warning.toLowerCase().includes('oil')) {
      return <AlertCircle className="w-6 h-6 text-red-400" />;
    }
    return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
  };

  const getWarningColor = (warning: string) => {
    if (warning.toLowerCase().includes('engine') || warning.toLowerCase().includes('check') ||
        warning.toLowerCase().includes('fuel') || warning.toLowerCase().includes('oil')) {
      return 'from-red-500/20 to-red-600/20 border-red-500/30';
    } else if (warning.toLowerCase().includes('tire') || warning.toLowerCase().includes('pressure')) {
      return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
    } else if (warning.toLowerCase().includes('abs') || warning.toLowerCase().includes('fault')) {
      return 'from-orange-500/20 to-red-500/20 border-orange-500/30';
    }
    return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent text-center flex items-center justify-center">
        <AlertTriangle className="w-6 h-6 mr-2" />
        System Alerts
      </h2>

      {warnings.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
          <CheckCircle className="w-12 h-12 text-green-400 mb-3 animate-pulse" />
          <div className="text-green-300 text-lg font-bold">All Systems Operational</div>
          <div className="text-green-200/80 text-sm mt-1">No warnings detected</div>
        </div>
      ) : (
        <div className="space-y-4">
          {warnings.map((warning, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-6 bg-gradient-to-r ${getWarningColor(warning)} backdrop-blur-sm rounded-2xl border animate-pulse`}
            >
              <div className="flex items-center">
                {getWarningIcon(warning)}
                <div className="ml-4">
                  <span className="text-lg font-bold text-white">{warning}</span>
                  <div className="text-white/70 text-sm mt-1">Requires immediate attention</div>
                </div>
              </div>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          ))}

          <div className="mt-6 text-center">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 animate-pulse`}>
              <AlertTriangle className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-300 font-bold">
                {warnings.length} {warnings.length === 1 ? 'Critical Alert' : 'Critical Alerts'} Active
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}