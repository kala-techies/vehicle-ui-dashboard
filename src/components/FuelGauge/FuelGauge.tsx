import { Fuel } from 'lucide-react';

export interface FuelGaugeProps {
  level: number;
}

export function FuelGauge({ level }: FuelGaugeProps) {
  const getFuelColor = () => {
    if (level < 20) return 'text-red-500';
    if (level < 40) return 'text-yellow-500';
    return 'text-green-500';
  };

  const needleRotation = -90 + (level * 90) / 100;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2 dark:text-white">Fuel Level</h2>
      
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700 overflow-hidden" 
             style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 0, 0 0)' }}></div>
        
        {Array.from({ length: 6 }).map((_, i) => {
          const rotation = -90 + i * 18;
          const isMajor = i % 2 === 0;
          return (
            <div 
              key={i}
              className="absolute w-1 bg-gray-400 dark:bg-gray-500 origin-bottom"
              style={{
                height: isMajor ? '10px' : '6px',
                left: '50%',
                bottom: '50%',
                transform: `translateX(-50%) rotate(${rotation}deg)`,
                transformOrigin: 'bottom center'
              }}
            ></div>
          );
        })}
        
        {['E', '1/2', 'F'].map((label, i) => {
          const rotation = -90 + i * 45;
          const radians = (rotation * Math.PI) / 180;
          const x = Math.sin(radians) * 50;
          const y = -Math.cos(radians) * 50;
          
          return (
            <div 
              key={i}
              className="absolute text-xs font-medium dark:text-gray-300"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {label}
            </div>
          );
        })}
        
        <div 
          className={`absolute w-1 h-24 ${getFuelColor()} origin-bottom rounded-full`}
          style={{
            left: '50%',
            bottom: '50%',
            transform: `translateX(-50%) rotate(${needleRotation}deg)`,
            transformOrigin: 'bottom center',
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        
        <div className="absolute w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <Fuel className={`w-6 h-6 ${getFuelColor()}`} />
          <span className="ml-1 text-sm font-medium dark:text-white">{level}%</span>
        </div>
      </div>
    </div>
  );
}