// src/components/VideoPlayer.jsx

import React, { useState, useEffect } from "react";

const VideoPlayer = ({ videoUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (videoUrls.length > 0) {
      setCurrentVideoIndex(0); // Start playing the first video when new videos are passed
    }
  }, [videoUrls]);

  const handleVideoEnd = () => {
    // Play the next video if there is one
    if (currentVideoIndex < videoUrls.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  return (
    <div>
      {videoUrls.length > 0 && (
        <video
          src={videoUrls[currentVideoIndex]}
          controls
          autoPlay
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
