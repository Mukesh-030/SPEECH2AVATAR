// src/components/VideoPlayer.jsx

import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (videoUrls && videoUrls.length > 0) {
      setCurrentVideoIndex(0); // Reset index when new videos come in
    }
  }, [videoUrls]);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoUrls.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="avatar-container">
      <div className="video-wrapper">
        {videoUrls.length > 0 && (
          <video
            key={videoUrls[currentVideoIndex]} // 👈 FORCES re-render on src change
            src={videoUrls[currentVideoIndex]}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="video-player"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;