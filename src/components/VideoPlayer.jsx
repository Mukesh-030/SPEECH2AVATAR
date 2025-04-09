// src/components/VideoPlayer.jsx

import React from "react";
import ReactPlayer from "react-player";

// This component receives the video URL and controls its rendering
const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) return null;  // Don't render the player if there is no URL

  return (
    <div className="video-player">
      <ReactPlayer
        url={videoUrl}
        playing
        controls
        width="100%"    // Adjust to fit the container width
        height="auto"   // Auto height to maintain aspect ratio
      />
    </div>
  );
};

export default VideoPlayer;
