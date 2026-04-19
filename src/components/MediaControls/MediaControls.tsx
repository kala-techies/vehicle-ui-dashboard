import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music } from 'lucide-react';

export function MediaControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack] = useState({
    title: 'Driving Home',
    artist: 'Road Trip Band',
  });

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
    if (parseInt(e.target.value) > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center flex items-center justify-center">
        <Music className="w-6 h-6 mr-2" />
        Media Player
      </h2>

      {/* Track Info */}
      <div className="mb-6 text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="text-lg font-bold truncate text-white mb-1">{currentTrack.title}</div>
        <div className="text-sm text-white/80 truncate">{currentTrack.artist}</div>
        <div className="mt-2 flex justify-center">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex justify-center items-center space-x-6 mb-6">
        <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110 hover:shadow-lg">
          <SkipBack className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={togglePlay}
          className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
            isPlaying
              ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 animate-pulse'
              : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white ml-1" />
          )}
        </button>

        <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110 hover:shadow-lg">
          <SkipForward className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-5 h-5 text-red-400" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>

        <div className="flex-1">
          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${isMuted ? 0 : volume}%, rgba(255,255,255,0.2) ${isMuted ? 0 : volume}%, rgba(255,255,255,0.2) 100%)`
            }}
          />
        </div>

        <span className="text-sm font-mono font-bold text-white w-8 text-right">
          {isMuted ? '0' : volume}
        </span>
      </div>

      {/* Status */}
      <div className="mt-4 text-center">
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          isPlaying
            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
            : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
        }`}>
          {isPlaying ? '▶️ Now Playing' : '⏸️ Paused'}
        </span>
      </div>
    </div>
  );
}
