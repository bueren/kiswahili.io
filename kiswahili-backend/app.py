# Flask app entry
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Karibu kwenye Kiswahili Learning API!"

@app.route("/api/ask", methods=["POST"])
def ask():
    question = request.json.get("question")
    if not question:
        return jsonify({"error": "Swali halijatolewa"}), 400
    return jsonify({"answer": f"Mwalimu anasema: {question}"})
