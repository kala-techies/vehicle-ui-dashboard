import { Fuel } from 'lucide-react';

export interface FuelGaugeProps {
  level: number;
}

export function FuelGauge({ level }: FuelGaugeProps) {
  const getFuelColor = () => {
    if (level < 20) return '#ef4444'; // red
    if (level < 40) return '#f59e0b'; // yellow
    return '#10b981'; // green
  };

  const needleRotation = -90 + (level * 180) / 100;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        ⛽ Fuel Level
      </h2>

      <div className="relative w-48 h-48">
        <svg width="192" height="192" viewBox="0 0 192 192" className="absolute inset-0">
          <defs>
            <linearGradient id="fuelGaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
            <filter id="fuelGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background semicircle */}
          <path
            d="M 16 96 A 80 80 0 0 1 176 96"
            fill="url(#fuelGaugeGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            className="drop-shadow-lg"
          />

          {/* Tick marks */}
          {Array.from({ length: 11 }).map((_, i) => {
            const angle = -90 + i * 18;
            const isMajor = i % 2 === 0;
            const innerRadius = isMajor ? 65 : 70;
            const outerRadius = 80;
            const x1 = 96 + innerRadius * Math.cos((angle - 90) * Math.PI / 180);
            const y1 = 96 + innerRadius * Math.sin((angle - 90) * Math.PI / 180);
            const x2 = 96 + outerRadius * Math.cos((angle - 90) * Math.PI / 180);
            const y2 = 96 + outerRadius * Math.sin((angle - 90) * Math.PI / 180);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.6)"
                strokeWidth={isMajor ? "2" : "1"}
              />
            );
          })}

          {/* Labels */}
          {['E', '1/4', '1/2', '3/4', 'F'].map((label, i) => {
            const angle = -90 + i * 45;
            const radius = 55;
            const x = 96 + radius * Math.cos((angle - 90) * Math.PI / 180);
            const y = 96 + radius * Math.sin((angle - 90) * Math.PI / 180);

            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-bold fill-white"
              >
                {label}
              </text>
            );
          })}

          {/* Needle */}
          <g transform={`rotate(${needleRotation} 96 96)`}>
            <line
              x1="96"
              y1="96"
              x2="96"
              y2="30"
              stroke={getFuelColor()}
              strokeWidth="3"
              filter="url(#fuelGlow)"
              className="transition-all duration-500 ease-out"
            />
            <circle
              cx="96"
              cy="30"
              r="3"
              fill={getFuelColor()}
              filter="url(#fuelGlow)"
            />
          </g>

          {/* Center hub */}
          <circle
            cx="96"
            cy="96"
            r="6"
            fill="rgba(255,255,255,0.9)"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="2"
          />
        </svg>

        {/* Digital display */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg border border-white/20">
          <Fuel className="w-5 h-5 mr-2" style={{ color: getFuelColor() }} />
          <span className="text-lg font-mono font-bold" style={{ color: getFuelColor() }}>
            {level}%
          </span>
        </div>
      </div>
    </div>
  );
}