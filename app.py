from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy
import os

# Initialize Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# Load spaCy English model
nlp = spacy.load("en_core_web_sm")

# Define a set of sign language keywords to match against
sign_language_keywords = {
    "hello", "goodbye", "please", "thank", "sorry", "yes", "no", "good", "bad",
    "i", "me", "you", "it", "she", "him", "we", "us", "they", "them",
    "who", "what", "where", "when", "why", "how", "which",
    "big", "small", "hot", "cold", "new", "old", "more", "few", "many",
    "home", "school", "work", "car", "food", "water", "friend", "family",
    "man", "woman", "child", "clothes", "money", "day", "night", "morning",
    "afternoon", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "monday", "tuesday", "wednesday", "thursday", "friday",
    "saturday", "sunday", "happy", "sad", "excited", "tired", "angry",
    "scared", "surprised", "like", "love", "want", "need", "go", "come",
    "have", "eat", "drink", "see", "bathroom", "stop", "help", "birthday",
    "make", "play", "feel", "think", "chat", "sign", "ask", "sleep",
    "wake_up", "sit", "stand", "buy", "sell", "start", "finish"
}

@app.route("/process", methods=["POST"])
def process_text():
    data = request.get_json()
    text = data.get("text", "").strip()

    if not text:
        return jsonify({"keywords": [], "error": "No text provided."}), 400

    # Process text with spaCy NLP pipeline
    doc = nlp(text.lower())

    # Extract only the keywords from text
    extracted_keywords = []
    for token in doc:
        lemma = token.lemma_
        if lemma in sign_language_keywords:
            extracted_keywords.append(lemma)

    return jsonify({"keywords": extracted_keywords})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
