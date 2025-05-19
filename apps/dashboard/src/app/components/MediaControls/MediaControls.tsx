import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

export interface MediaControlsProps {}

export function MediaControls(props: MediaControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
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
      <h2 className="text-lg font-semibold mb-3 dark:text-white">Media Player</h2>
      
      {/* Track info */}
      <div className="mb-3 text-center">
        <div className="text-sm font-medium truncate dark:text-white">{currentTrack.title}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{currentTrack.artist}</div>
      </div>
      
      {/* Playback controls */}
      <div className="flex justify-center items-center space-x-4 mb-3">
        <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <SkipBack className="w-5 h-5 dark:text-white" />
        </button>
        
        <button 
          onClick={togglePlay}
          className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>
        
        <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <SkipForward className="w-5 h-5 dark:text-white" />
        </button>
      </div>
      
      {/* Volume control */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={toggleMute}
          className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4 dark:text-white" />
          ) : (
            <Volume2 className="w-4 h-4 dark:text-white" />
          )}
        </button>
        
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        
        <span className="text-xs w-6 text-right dark:text-white">
          {isMuted ? 0 : volume}
        </span>
      </div>
      
      {/* Playback status */}
      <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
        {isPlaying ? 'Now Playing' : 'Paused'}
      </div>
    </div>
  );
}

export default MediaControls;