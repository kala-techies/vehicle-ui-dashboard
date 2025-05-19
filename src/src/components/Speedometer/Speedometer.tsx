export interface SpeedometerProps {
  speed: number;
  maxSpeed: number;
}

export function Speedometer({ speed, maxSpeed }: SpeedometerProps) {
  const percentage = (speed / maxSpeed) * 100;
  const needleRotation = -120 + (percentage * 240) / 100;
  
  const getSpeedColor = () => {
    if (percentage < 30) return 'text-green-500';
    if (percentage < 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2 dark:text-white">Speedometer</h2>
      
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
        
        {Array.from({ length: 9 }).map((_, i) => {
          const rotation = -120 + i * 30;
          const isMajor = i % 2 === 0;
          return (
            <div 
              key={i}
              className="absolute w-1 bg-gray-400 dark:bg-gray-500 origin-bottom"
              style={{
                height: isMajor ? '12px' : '8px',
                left: '50%',
                bottom: '50%',
                transform: `translateX(-50%) rotate(${rotation}deg)`,
                transformOrigin: 'bottom center'
              }}
            ></div>
          );
        })}
        
        {[0, 40, 80, 120, 160].map((value, i) => {
          const rotation = -120 + (i * 60);
          const radians = (rotation * Math.PI) / 180;
          const x = Math.sin(radians) * 60;
          const y = -Math.cos(radians) * 60;
          
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
              {value}
            </div>
          );
        })}
        
        <div 
          className={`absolute w-1 h-32 ${getSpeedColor()} origin-bottom rounded-full`}
          style={{
            left: '50%',
            bottom: '50%',
            transform: `translateX(-50%) rotate(${needleRotation}deg)`,
            transformOrigin: 'bottom center',
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        
        <div className="absolute w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-900 text-white px-3 py-1 rounded-md">
          <span className="text-xl font-bold">{speed}</span>
          <span className="text-xs ml-1">km/h</span>
        </div>
      </div>
    </div>
  );
}