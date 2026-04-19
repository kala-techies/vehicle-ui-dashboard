export interface SpeedometerProps {
  speed: number;
  maxSpeed: number;
}

export function Speedometer({ speed, maxSpeed }: SpeedometerProps) {
  const percentage = (speed / maxSpeed) * 100;
  const needleRotation = -120 + (percentage * 240) / 100;

  const getSpeedColor = () => {
    if (percentage < 30) return '#10b981'; // green
    if (percentage < 70) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        🚀 Speedometer
      </h2>

      <div className="relative w-56 h-56">
        <svg width="224" height="224" viewBox="0 0 224 224" className="absolute inset-0">
          {/* Outer ring with gradient */}
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background circle */}
          <circle
            cx="112"
            cy="112"
            r="100"
            fill="url(#gaugeGradient)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            className="drop-shadow-lg"
          />

          {/* Tick marks */}
          {Array.from({ length: 25 }).map((_, i) => {
            const angle = -120 + i * 9;
            const isMajor = i % 4 === 0;
            const innerRadius = isMajor ? 85 : 90;
            const outerRadius = 100;
            const x1 = 112 + innerRadius * Math.cos((angle - 90) * Math.PI / 180);
            const y1 = 112 + innerRadius * Math.sin((angle - 90) * Math.PI / 180);
            const x2 = 112 + outerRadius * Math.cos((angle - 90) * Math.PI / 180);
            const y2 = 112 + outerRadius * Math.sin((angle - 90) * Math.PI / 180);

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

          {/* Speed labels */}
          {[0, 40, 80, 120, 160].map((value, i) => {
            const angle = -120 + (i * 60);
            const radius = 75;
            const x = 112 + radius * Math.cos((angle - 90) * Math.PI / 180);
            const y = 112 + radius * Math.sin((angle - 90) * Math.PI / 180);

            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-bold fill-white"
                style={{ fontSize: '12px' }}
              >
                {value}
              </text>
            );
          })}

          {/* Needle */}
          <g transform={`rotate(${needleRotation} 112 112)`}>
            <line
              x1="112"
              y1="112"
              x2="112"
              y2="40"
              stroke={getSpeedColor()}
              strokeWidth="3"
              filter="url(#glow)"
              className="transition-all duration-500 ease-out"
            />
            {/* Needle tip */}
            <circle
              cx="112"
              cy="40"
              r="4"
              fill={getSpeedColor()}
              filter="url(#glow)"
            />
          </g>

          {/* Center hub */}
          <circle
            cx="112"
            cy="112"
            r="8"
            fill="rgba(255,255,255,0.9)"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="2"
          />
        </svg>

        {/* Digital display */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20">
          <div className="text-2xl font-mono font-bold text-center" style={{ color: getSpeedColor() }}>
            {speed.toString().padStart(3, '0')}
          </div>
          <div className="text-xs text-center opacity-80">km/h</div>
        </div>
      </div>
    </div>
  );
}