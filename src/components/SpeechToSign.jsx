// src/components/SpeechToSign.jsx
import React, { useState, useRef, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

const SpeechToSign = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);

  const signLanguageMapping = {
    hello: "/videos/NAVIGATION/001_HELLO.mp4",
    goodbye: "/videos/NAVIGATION/002_GOODBYE.mp4",
    please: "/videos/NAVIGATION/003_PLEASE.mp4",
    thank: "/videos/NAVIGATION/004_THANK_YOU.mp4",
    sorry: "/videos/NAVIGATION/005_SORRY.mp4",
    yes: "/videos/NAVIGATION/006_YES.mp4",
    no: "/videos/NAVIGATION/007_NO.mp4",
    good: "/videos/NAVIGATION/008_GOOD.mp4",
    bad: "/videos/NAVIGATION/009_BAD.mp4",

    i: "/videos/PERSONAL_PRONOUNS/010_I_ME.mp4",
    me: "/videos/PERSONAL_PRONOUNS/010_I_ME.mp4",
    you: "/videos/PERSONAL_PRONOUNS/011_YOU.mp4",
    it: "/videos/PERSONAL_PRONOUNS/012_IT_SHE_HIM.mp4",
    she: "/videos/PERSONAL_PRONOUNS/012_IT_SHE_HIM.mp4",
    him: "/videos/PERSONAL_PRONOUNS/012_IT_SHE_HIM.mp4",
    we: "/videos/PERSONAL_PRONOUNS/013_WE_US.mp4",
    us: "/videos/PERSONAL_PRONOUNS/013_WE_US.mp4",
    they: "/videos/PERSONAL_PRONOUNS/014_THEY_THEM.mp4",
    them: "/videos/PERSONAL_PRONOUNS/014_THEY_THEM.mp4",

    who: "/videos/QUESTION_WORDS/015_WHO.mp4",
    what: "/videos/QUESTION_WORDS/016_WHAT.mp4",
    where: "/videos/QUESTION_WORDS/017_WHERE.mp4",
    when: "/videos/QUESTION_WORDS/018_WHEN.mp4",
    why: "/videos/QUESTION_WORDS/019_WHY.mp4",
    how: "/videos/QUESTION_WORDS/020_HOW.mp4",
    which: "/videos/QUESTION_WORDS/021_WHICH.mp4",

    big: "/videos/DESCRIPTIVE/022_BIG.mp4",
    small: "/videos/DESCRIPTIVE/023_SMALL.mp4",
    hot: "/videos/DESCRIPTIVE/024_HOT.mp4",
    cold: "/videos/DESCRIPTIVE/025_COLD.mp4",
    new: "/videos/DESCRIPTIVE/026_NEW.mp4",
    old: "/videos/DESCRIPTIVE/027_OLD.mp4",
    more: "/videos/DESCRIPTIVE/028_MORE.mp4",
    few: "/videos/DESCRIPTIVE/029_FEW.mp4",
    many: "/videos/DESCRIPTIVE/030_MANY.mp4",

    home: "/videos/EVERYDAY_NOUNS/031_HOME.mp4",
    school: "/videos/EVERYDAY_NOUNS/032_SCHOOL.mp4",
    work: "/videos/EVERYDAY_NOUNS/033_WORK.mp4",
    car: "/videos/EVERYDAY_NOUNS/034_CAR.mp4",
    food: "/videos/EVERYDAY_NOUNS/035_FOOD.mp4",
    water: "/videos/EVERYDAY_NOUNS/036_WATER.mp4",
    friend: "/videos/EVERYDAY_NOUNS/037_FRIEND.mp4",
    family: "/videos/EVERYDAY_NOUNS/038_FAMILY.mp4",
    man: "/videos/EVERYDAY_NOUNS/039_MAN.mp4",
    woman: "/videos/EVERYDAY_NOUNS/040_WOMAN.mp4",
    child: "/videos/EVERYDAY_NOUNS/041_CHILD.mp4",
    clothes: "/videos/EVERYDAY_NOUNS/042_CLOTHES.mp4",
    money: "/videos/EVERYDAY_NOUNS/043_MONEY.mp4",
    day: "/videos/EVERYDAY_NOUNS/044_DAY.mp4",
    night: "/videos/EVERYDAY_NOUNS/045_NIGHT.mp4",
    morning: "/videos/EVERYDAY_NOUNS/046_MORNING.mp4",
    afternoon: "/videos/EVERYDAY_NOUNS/047_AFTERNOON.mp4",

    one: "/videos/NUMBERS/048_ONE.mp4",
    two: "/videos/NUMBERS/049_TWO.mp4",
    three: "/videos/NUMBERS/050_THREE.mp4",
    four: "/videos/NUMBERS/051_FOUR.mp4",
    five: "/videos/NUMBERS/052_FIVE.mp4",
    six: "/videos/NUMBERS/053_SIX.mp4",
    seven: "/videos/NUMBERS/054_SEVEN.mp4",
    eight: "/videos/NUMBERS/055_EIGHT.mp4",
    nine: "/videos/NUMBERS/056_NINE.mp4",
    ten: "/videos/NUMBERS/057_TEN.mp4",

    monday: "/videos/DAYS_OF_THE_WEEK/058_MONDAY.mp4",
    tuesday: "/videos/DAYS_OF_THE_WEEK/059_TUESDAY.mp4",
    wednesday: "/videos/DAYS_OF_THE_WEEK/060_WEDNESDAY.mp4",
    thursday: "/videos/DAYS_OF_THE_WEEK/061_THURSDAY.mp4",
    friday: "/videos/DAYS_OF_THE_WEEK/062_FRIDAY.mp4",
    saturday: "/videos/DAYS_OF_THE_WEEK/063_SATURDAY.mp4",
    sunday: "/videos/DAYS_OF_THE_WEEK/064_SUNDAY.mp4",

    happy: "/videos/EMOTIONS/065_HAPPY.mp4",
    sad: "/videos/EMOTIONS/066_SAD.mp4",
    excited: "/videos/EMOTIONS/067_EXCITED.mp4",
    tired: "/videos/EMOTIONS/068_TIRED.mp4",
    angry: "/videos/EMOTIONS/069_ANGRY.mp4",
    scared: "/videos/EMOTIONS/070_SCARED.mp4",
    surprised: "/videos/EMOTIONS/071_SURPRISED.mp4",

    like: "/videos/COMMON/072_LIKE.mp4",
    love: "/videos/COMMON/073_LOVE.mp4",
    want: "/videos/COMMON/074_WANT.mp4",
    need: "/videos/COMMON/075_NEED.mp4",
    go: "/videos/COMMON/076_GO.mp4",
    come: "/videos/COMMON/077_COME.mp4",
    have: "/videos/COMMON/078_HAVE.mp4",
    eat: "/videos/COMMON/079_EAT.mp4",
    drink: "/videos/COMMON/080_DRINK.mp4",
    see: "/videos/COMMON/081_SEE.mp4",
    bathroom: "/videos/COMMON/082_BATHROOM.mp4",
    stop: "/videos/COMMON/083_STOP.mp4",
    help: "/videos/COMMON/084_HELP.mp4",
    birthday: "/videos/COMMON/085_BIRTHDAY.mp4",
    make: "/videos/COMMON/086_MAKE.mp4",
    play: "/videos/COMMON/087_PLAY.mp4",
    feel: "/videos/COMMON/088_FEEL.mp4",
    think: "/videos/COMMON/089_THINK.mp4",
    chat: "/videos/COMMON/090_CHAT.mp4",
    sign: "/videos/COMMON/091_SIGN.mp4",
    ask: "/videos/COMMON/092_ASK.mp4",
    sleep: "/videos/COMMON/093_SLEEP.mp4",
    wake_up: "/videos/COMMON/094_WAKE_UP.mp4",
    sit: "/videos/COMMON/095_SIT.mp4",
    stand: "/videos/COMMON/096_STAND.mp4",
    buy: "/videos/COMMON/097_BUY.mp4",
    sell: "/videos/COMMON/098_SELL.mp4",
    start: "/videos/COMMON/099_START.mp4",
    finish: "/videos/COMMON/100_FINISH.mp4"
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error("SpeechRecognition API not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognitionRef.current = recognition;

    let finalTranscript = "";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
      setRecognizedText(transcript);

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(async () => {
        finalTranscript = transcript.trim();
        if (finalTranscript) {
          const backendUrl =
            process.env.NODE_ENV === "production"
              ? "https://speech2avatar-backend.onrender.com"
              : "http://localhost:5000";

          try {
            const response = await fetch(`${backendUrl}/process`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text: finalTranscript }),
            });

            const data = await response.json();
            const extractedKeywords = data.keywords || [];

            const videos = extractedKeywords
              .map((word) => signLanguageMapping[word])
              .filter(Boolean);

            setVideoUrls(videos);
          } catch (error) {
            console.error("Error communicating with NLP server:", error);
          }
        }
      }, 2000);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    return () => {
      recognition.stop();
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const startListening = () => {
    if (!isListening) {
      setRecognizedText("");
      setVideoUrls([]);
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  const stopListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="app">
      <h2>Speech to Sign Avatar</h2>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>

      {recognizedText && (
        <div className="recognized-text">
          <h3>Recognized Text:</h3>
          <p>{recognizedText}</p>
        </div>
      )}

      <VideoPlayer videoUrls={videoUrls} isListening={isListening} />
    </div>
  );
};

export default SpeechToSign;
