  // src/components/VideoPlayerWithDropdown.jsx

  import React, { useState } from "react";
  import ReactPlayer from "react-player";

  // Video URL mappings for the dropdown
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

    { label: "I / Me", value: "/videos/PERSONAL_PRONOUNS/010_I_ME.MP4" },
  { label: "You", value: "/videos/PERSONAL_PRONOUNS/011_YOU.MP4" },
  { label: "It / She / Him", value: "/videos/PERSONAL_PRONOUNS/012_IT_SHE_HIM.MP4" },
  { label: "We / Us", value: "/videos/PERSONAL_PRONOUNS/013_WE_US.MP4" },
  { label: "They / Them", value: "/videos/PERSONAL_PRONOUNS/014_THEY_THEM.MP4" },

  { label: "Who", value: "/videos/QUESTION_WORDS/015_WHO.MP4" },
  { label: "What", value: "/videos/QUESTION_WORDS/016_WHAT.MP4" },
  { label: "Where", value: "/videos/QUESTION_WORDS/017_WHERE.MP4" },
  { label: "When", value: "/videos/QUESTION_WORDS/018_WHEN.MP4" },
  { label: "Why", value: "/videos/QUESTION_WORDS/019_WHY.MP4" },
  { label: "How", value: "/videos/QUESTION_WORDS/020_HOW.MP4" },
  { label: "Which", value: "/videos/QUESTION_WORDS/021_WHICH.MP4" },

  { label: "Big", value: "/videos/DESCRIPTIVE/022_BIG.MP4" },
  { label: "Small", value: "/videos/DESCRIPTIVE/023_SMALL.MP4" },
  { label: "Hot", value: "/videos/DESCRIPTIVE/024_HOT.MP4" },
  { label: "Cold", value: "/videos/DESCRIPTIVE/025_COLD.MP4" },
  { label: "New", value: "/videos/DESCRIPTIVE/026_NEW.MP4" },
  { label: "Old", value: "/videos/DESCRIPTIVE/027_OLD.MP4" },
  { label: "More", value: "/videos/DESCRIPTIVE/028_MORE.MP4" },
  { label: "Few", value: "/videos/DESCRIPTIVE/029_FEW.MP4" },
  { label: "Many", value: "/videos/DESCRIPTIVE/030_MANY.MP4" },

  { label: "Home", value: "/videos/EVERYDAY_NOUNS/031_HOME.MP4" },
  { label: "School", value: "/videos/EVERYDAY_NOUNS/032_SCHOOL.MP4" },
  { label: "Work", value: "/videos/EVERYDAY_NOUNS/033_WORK.MP4" },
  { label: "Car", value: "/videos/EVERYDAY_NOUNS/034_CAR.MP4" },
  { label: "Food", value: "/videos/EVERYDAY_NOUNS/035_FOOD.MP4" },
  { label: "Water", value: "/videos/EVERYDAY_NOUNS/036_WATER.MP4" },
  { label: "Friend", value: "/videos/EVERYDAY_NOUNS/037_FRIEND.MP4" },
  { label: "Family", value: "/videos/EVERYDAY_NOUNS/038_FAMILY.MP4" },
  { label: "Man", value: "/videos/EVERYDAY_NOUNS/039_MAN.MP4" },
  { label: "Woman", value: "/videos/EVERYDAY_NOUNS/040_WOMAN.MP4" },
  { label: "Child", value: "/videos/EVERYDAY_NOUNS/041_CHILD.MP4" },
  { label: "Clothes", value: "/videos/EVERYDAY_NOUNS/042_CLOTHES.MP4" },
  { label: "Money", value: "/videos/EVERYDAY_NOUNS/043_MONEY.MP4" },
  { label: "Day", value: "/videos/EVERYDAY_NOUNS/044_DAY.MP4" },
  { label: "Night", value: "/videos/EVERYDAY_NOUNS/045_NIGHT.MP4" },
  { label: "Morning", value: "/videos/EVERYDAY_NOUNS/046_MORNING.MP4" },
  { label: "Afternoon", value: "/videos/EVERYDAY_NOUNS/047_AFTERNOON.MP4" },

  { label: "One", value: "/videos/NUMBERS/048_ONE.MP4" },
  { label: "Two", value: "/videos/NUMBERS/049_TWO.MP4" },
  { label: "Three", value: "/videos/NUMBERS/050_THREE.MP4" },
  { label: "Four", value: "/videos/NUMBERS/051_FOUR.MP4" },
  { label: "Five", value: "/videos/NUMBERS/052_FIVE.MP4" },
  { label: "Six", value: "/videos/NUMBERS/053_SIX.MP4" },
  { label: "Seven", value: "/videos/NUMBERS/054_SEVEN.MP4" },
  { label: "Eight", value: "/videos/NUMBERS/055_EIGHT.MP4" },
  { label: "Nine", value: "/videos/NUMBERS/056_NINE.MP4" },
  { label: "Ten", value: "/videos/NUMBERS/057_TEN.MP4" },

  { label: "Monday", value: "/videos/DAYS_OF_THE_WEEK/058_MONDAY.MP4" },
  { label: "Tuesday", value: "/videos/DAYS_OF_THE_WEEK/059_TUESDAY.MP4" },
  { label: "Wednesday", value: "/videos/DAYS_OF_THE_WEEK/060_WEDNESDAY.MP4" },
  { label: "Thursday", value: "/videos/DAYS_OF_THE_WEEK/061_THURSDAY.MP4" },
  { label: "Friday", value: "/videos/DAYS_OF_THE_WEEK/062_FRIDAY.MP4" },
  { label: "Saturday", value: "/videos/DAYS_OF_THE_WEEK/063_SATURDAY.MP4" },
  { label: "Sunday", value: "/videos/DAYS_OF_THE_WEEK/064_SUNDAY.MP4" },

  { label: "Happy", value: "/videos/EMOTIONS/065_HAPPY.MP4" },
  { label: "Sad", value: "/videos/EMOTIONS/066_SAD.MP4" },
  { label: "Excited", value: "/videos/EMOTIONS/067_EXCITED.MP4" },
  { label: "Tired", value: "/videos/EMOTIONS/068_TIRED.MP4" },
  { label: "Angry", value: "/videos/EMOTIONS/069_ANGRY.MP4" },
  { label: "Scared", value: "/videos/EMOTIONS/070_SCARED.MP4" },
  { label: "Surprised", value: "/videos/EMOTIONS/071_SURPRISED.MP4" },

  { label: "Like", value: "/videos/COMMON/072_LIKE.MP4" },
  { label: "Love", value: "/videos/COMMON/073_LOVE.MP4" },
  { label: "Want", value: "/videos/COMMON/074_WANT.MP4" },
  { label: "Need", value: "/videos/COMMON/075_NEED.MP4" },
  { label: "Go", value: "/videos/COMMON/076_GO.MP4" },
  { label: "Come", value: "/videos/COMMON/077_COME.MP4" },
  { label: "Have", value: "/videos/COMMON/078_HAVE.MP4" },
  { label: "Eat", value: "/videos/COMMON/079_EAT.MP4" },
  { label: "Drink", value: "/videos/COMMON/080_DRINK.MP4" },
  { label: "See", value: "/videos/COMMON/081_SEE.MP4" },
  { label: "Bathroom", value: "/videos/COMMON/082_BATHROOM.MP4" },
  { label: "Stop", value: "/videos/COMMON/083_STOP.MP4" },
  { label: "Help", value: "/videos/COMMON/084_HELP.MP4" },
  { label: "Birthday", value: "/videos/COMMON/085_BIRTHDAY.MP4" },
  { label: "Make", value: "/videos/COMMON/086_MAKE.MP4" },
  { label: "Play", value: "/videos/COMMON/087_PLAY.MP4" },
  { label: "Feel", value: "/videos/COMMON/088_FEEL.MP4" },
  { label: "Think", value: "/videos/COMMON/089_THINK.MP4" },
  { label: "Chat", value: "/videos/COMMON/090_CHAT.MP4" },
  { label: "Sign", value: "/videos/COMMON/091_SIGN.MP4" },
  { label: "Ask", value: "/videos/COMMON/092_ASK.MP4" },
  { label: "Sleep", value: "/videos/COMMON/093_SLEEP.MP4" },
  { label: "Wake Up", value: "/videos/COMMON/094_WAKE_UP.MP4" },
  { label: "Sit", value: "/videos/COMMON/095_SIT.MP4" },
  { label: "Stand", value: "/videos/COMMON/096_STAND.MP4" },
  { label: "Buy", value: "/videos/COMMON/097_BUY.MP4" },
  { label: "Sell", value: "/videos/COMMON/098_SELL.MP4" },
  { label: "Start", value: "/videos/COMMON/099_START.MP4" },
  { label: "Finish", value: "/videos/COMMON/100_FINISH.MP4" },
    // Add more video options here as needed
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
