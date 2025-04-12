import React, { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ videoUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoUrls.length > 0) {
      setCurrentVideoIndex(0);
    }
  }, [videoUrls]);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoUrls.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  return (
    <div
      style={{
        width: "640px",
        height: "360px",
        backgroundColor: "#000",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      {videoUrls.length > 0 && (
        <video
          key={currentVideoIndex}
          ref={videoRef}
          src={videoUrls[currentVideoIndex]}
          controls
          autoPlay
          onEnded={handleVideoEnd}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill", // <- Stretches to fill box!
          }}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
