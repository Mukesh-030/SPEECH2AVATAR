// src/components/VideoPlayerWithDropdown.jsx

import React, { useState } from "react";
import ReactPlayer from "react-player";

// Video URL mappings for the dropdown (this can be adjusted based on your folder structure)
const videoOptions = [
  { label: "Hello", value: "/videos/navigation/001_HELLO.mp4" },
  { label: "Goodbye", value: "/videos/navigation/002_Goodbye.mp4" },
  { label: "Please", value: "/videos/navigation/003_Please.mp4" },
  { label: "Thank You", value: "/videos/navigation/004_Thank_You.mp4" },
  { label: "Sorry", value: "/videos/navigation/005_Sorry.mp4" },
  { label: "Yes", value: "/videos/navigation/006_Yes.mp4" },
  { label: "No", value: "/videos/navigation/007_No.mp4" },
  { label: "Good", value: "/videos/navigation/008_Good.mp4" },
  { label: "Bad", value: "/videos/navigation/009_Bad.mp4" },
  // Add more videos here as needed
];

const VideoPlayerWithDropdown = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);  // Store the selected video URL

  // Handle video selection from the dropdown
  const handleVideoSelect = (event) => {
    setSelectedVideo(event.target.value);
  };

  return (
    <div className="video-player-with-dropdown">
      <h2>Select a Video to Play</h2>
      
      {/* Dropdown to select the video */}
      <select onChange={handleVideoSelect} value={selectedVideo || ""}>
        <option value="" disabled>Select a video</option>
        {videoOptions.map((video) => (
          <option key={video.value} value={video.value}>
            {video.label}
          </option>
        ))}
      </select>

      {/* Only show the video player if a video is selected */}
      {selectedVideo && (
        <div className="video-player">
          <ReactPlayer
            url={selectedVideo}
            playing={true}         // Auto-play the video once selected
            controls={true}       // Show player controls (Play, Pause, etc.)
            width="100%"          // Adjust to fit the container width
            height="auto"         // Auto height to maintain aspect ratio
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayerWithDropdown;
