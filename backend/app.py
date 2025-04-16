from flask import Flask, request, jsonify
import spacy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins for development

nlp = spacy.load("en_core_web_sm")  # Load spaCy's small English model

# Define important keywords
sign_language_keywords = {
    "hello", "goodbye", "please", "thankyou", "sorry", "yes", "no", "good", "bad",
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

@app.route('/process', methods=['POST'])
def process_text():
    data = request.json
    text = data.get("text", "")
    doc = nlp(text.lower())

    extracted = []
    for token in doc:
        if token.lemma_ in sign_language_keywords:
            extracted.append(token.lemma_)

    return jsonify({"keywords": extracted})

if __name__ == '__main__':
    app.run(debug=True)
