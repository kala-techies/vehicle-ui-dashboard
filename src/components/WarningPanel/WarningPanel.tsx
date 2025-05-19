import { AlertTriangle, X } from 'lucide-react';

export interface WarningPanelProps {
  warnings: string[];
}

export function WarningPanel({ warnings }: WarningPanelProps) {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold mb-3 dark:text-white">Warnings & Alerts</h2>
      
      {warnings.length === 0 ? (
        <div className="flex items-center justify-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-green-600 dark:text-green-400 text-sm">All systems operational</div>
        </div>
      ) : (
        <div className="space-y-2">
          {warnings.map((warning, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
            >
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400">{warning}</span>
              </div>
              <button className="p-1 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-800">
                <X className="w-4 h-4 text-yellow-500" />
              </button>
            </div>
          ))}
          
          {warnings.length > 0 && (
            <div className="mt-2 text-xs text-red-500 dark:text-red-400 text-center">
              {warnings.length} {warnings.length === 1 ? 'warning' : 'warnings'} detected
            </div>
          )}
        </div>
      )}
    </div>
  );
}