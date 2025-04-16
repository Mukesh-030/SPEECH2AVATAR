import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
import MicrophoneAnimation from "./MicrophoneAnimation";

const VideoPlayer = ({ videoUrls, isListening }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [allVideosPlayed, setAllVideosPlayed] = useState(false);

  useEffect(() => {
    setCurrentVideoIndex(0);
    setAllVideosPlayed(false);
  }, [videoUrls]);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoUrls.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      setAllVideosPlayed(true);
    }
  };

  const showMicrophone = isListening && videoUrls.length === 0;
  const showSignVideo = videoUrls.length > 0 && !allVideosPlayed;

  const getCurrentSign = (url) => {
    if (!url) return "";
    const parts = url.split("/");
    const filename = parts[parts.length - 1];
    const keyword = filename.split("_").slice(1).join("_").replace(".mp4", "");
    return keyword.replace(/_/g, " ").toLowerCase();
  };

  return (
    <div className="avatar-container">
      <div className="video-wrapper">
        {showMicrophone ? (
          <MicrophoneAnimation />
        ) : showSignVideo ? (
          <video
            key={videoUrls[currentVideoIndex]}
            src={videoUrls[currentVideoIndex]}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="video-player"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <video
            src="INTRO.mp4"
            autoPlay
            muted
            loop
            className="video-player"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {showSignVideo && (
        <p className="current-sign">
          Current sign: {getCurrentSign(videoUrls[currentVideoIndex])}
        </p>
      )}
    </div>
  );
};

export default VideoPlayer;
